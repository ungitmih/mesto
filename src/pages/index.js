import './index.css';
import Card from '../components/Card.js';
import {FormValidator} from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {popupProfile, profilePopupSelector, popupAddPhoto, photoPopupSelector, popupOpenImage, avatarPopup, avatarPopupSelector, openImageSelector, popupPicture, popupPic, popupPictureName, popupPicName, buttonEdit, editImageButton, editImageButtonSelector, popUpEditButtonSelector, buttonAdd, buttonCloseProfile, buttonClosePhoto, buttonCloseImage, popupButtonClose, name, job, nameInput, jobInput, profileSelectors, nameInputPhoto, linkInputPhoto, formElementProfile, formElementPhoto, profileAvatar, formElementAvatar,  elementsItems, elementsItemsSelector, templateEl, linkInputAvatar, initialCards, formValidation, popupDeleteImage} from "../utils/constants.js";

let userId = null;

const api = new Api({
  urladdress: 'https://mesto.nomoreparties.co/v1/cohort-24',
  headers: {
    authorization: '73388b4e-0daf-48b3-9b0f-efed54a4a713',
    'Content-type': 'application/json'
  }
})

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([data, item]) => {
    const userData = data;
    userId = userData._id;
    userInfo.setUserInfo(userData);
    itemList.renderItems(item);
  })
  .catch((err) => {
    console.log(err)
  })

const popupProfileEdit = new PopupWithForm(profilePopupSelector, (info) => {
  popupProfileEdit.renderLoading(true)
  api.editUserInfo(info.name, info.about)
    .then(() => {
      userInfo.setUserInfo(info)
      popupProfileEdit.close()
    })
    .finally(() => {
      popupProfileEdit.renderLoading(false)
    })
    .catch((err) => {
      console.log(err);
    });
});
popupProfileEdit.setEventListeners()

const profileValidate = new FormValidator(formValidation, formElementProfile)
const photoValidate = new FormValidator(formValidation, formElementPhoto)
const avatarUpdateValidation = new FormValidator(formValidation, formElementAvatar)

//открытие редактирования профиля
const userInfo = new UserInfo(profileSelectors)
buttonEdit.addEventListener('click', () => {
  popupProfileEdit.open();
  const userData = userInfo.getUserInfo()
  nameInput.value = userData.name
  jobInput.value = userData.about
  profileValidate.resetForm();
})

const popupPhotoAdd = new PopupWithForm(photoPopupSelector, (info) => {
  popupPhotoAdd.renderLoading(true)
  api.postCard(info.name, info.link)
  .then(info => {
  const newCard = createCard(info)
  itemList.addImage(newCard)
  popupPhotoAdd.close()
}).finally(() => {
  popupPhotoAdd.renderLoading(false)
})
  .catch((err) => {
    console.log(err);
  });
});
popupPhotoAdd.setEventListeners()

const popupImage = new PopupWithImage(openImageSelector, popupPic, popupPicName)
popupImage.setEventListeners()

const popUpEditAvatar = new PopupWithForm(avatarPopupSelector, () => {
  popUpEditAvatar.renderLoading(true)

  api.editAvatar(linkInputAvatar.value)
  .then((res) => {
    userInfo.setUserInfo(res)
    popUpEditAvatar.close()
  })
  .finally(() => {
    popUpEditAvatar.renderLoading(false)
  }).catch((err) => {
  console.log(err);
});

});
popUpEditAvatar.setEventListeners();

const popupDelete = new PopupWithDelete(popupDeleteImage, (evt, card) => {
  deleteConfirm(evt, card)
})
popupDelete.setEventListeners()

//фотографии по умолчанию
const itemList = new Section({
  renderer: (cardEl) => {
    const newItem = createCard(cardEl)
    itemList.addItem(newItem);
  }
}, elementsItemsSelector);

 //открытие добавления фотографии
 buttonAdd.addEventListener('click', () => {
  popupPhotoAdd.open()
  photoValidate.resetForm();
})

//создание фотографий
function createCard(item) {
  const newItem = new Card(item, templateEl, {
    handlerCardClick: (name, link) => {
      popupImage.open(name, link)
    }, handlerLikeCard: () => {
      const likedPhoto = newItem.likedPhoto();
      const apiResult = likedPhoto ? api.unlikeCard(newItem.getCardId()) : api.likeCard(newItem.getCardId());

      apiResult.then(data => {
        newItem.setLikes(data.likes);
        newItem.renderLikes()
      }).catch((err) => {
        console.log(err);
      })
    }, handlerDeleteCard: () => {
      popupDelete.open(newItem)
    }
  }, userId, item._id)

  const itemEL = newItem.generateCard();
  return itemEL;
}

const deleteConfirm = (evt, newItem) => {
  evt.preventDefault();
  api.deletePhoto(newItem.getCardId())
    .then(response => {
      newItem.deletePhoto()
      popupDelete.close()
    })
    .catch((err) => {
    console.log(err);
  });
}

editImageButton.addEventListener('click', () => {
  popUpEditAvatar.open()
  avatarUpdateValidation.resetForm()
})

photoValidate.enableValidation();
profileValidate.enableValidation();
avatarUpdateValidation.enableValidation();