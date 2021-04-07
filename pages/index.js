import Card from '../components/Card.js';
import {FormValidator} from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {popupProfile, profilePopupSelector, formValidation, popupAddPhoto, photoPopupSelector, popupOpenImage, openImageSelector, popupPicture, popupPic, popupPictureName, popupPicName, buttonEdit, popUpEditButtonSelector, buttonAdd, buttonCloseProfile, buttonClosePhoto, buttonCloseImage, popupButtonClose, name, job, nameInput, jobInput, profileSelectors, nameInputPhoto, linkInputPhoto, formElementProfile, formElementPhoto, elementsItems, elementsItemsSelector, templateEl, initialCards} from "../utils/constants.js";

const popupProfileEdit = new PopupWithForm(profilePopupSelector, (info) => userInfo.setUserInfo(info)
);
popupProfileEdit.setEventListeners()

const profileValidate = new FormValidator(formValidation, formElementProfile)
const photoValidate = new FormValidator(formValidation, formElementPhoto)

//открытие редактирования профиля
const userInfo = new UserInfo(profileSelectors)
buttonEdit.addEventListener('click', () => {
  popupProfileEdit.open();
  const personInfo = userInfo.getUserInfo()
  nameInput.value = personInfo.name
  jobInput.value = personInfo.description
  profileValidate.resetForm();
})

const popupPhotoAdd = new PopupWithForm(photoPopupSelector, (info) => {
  const newCard = createCard(info)
  itemList.addImage(newCard)
});

popupPhotoAdd.setEventListeners()

const popupImage = new PopupWithImage(openImageSelector, popupPic, popupPicName)

popupImage.setEventListeners()

//фотографии по умолчанию
const itemList = new Section({
  items: initialCards,
  renderer: (cardEl) => {
    const newItem = createCard(cardEl)
    itemList.addItem(newItem);
  }
}, elementsItemsSelector);
itemList.renderItems();

 //открытие добавления фотографии
 buttonAdd.addEventListener('click', () => {
  popupPhotoAdd.open()
  photoValidate.resetForm();
})

//создание фотографий
function createCard(item) {
  const newItem = new Card(item, templateEl, {
    handleCardClick: (name, link) => {
      popupImage.open(name, link)
    }
  })

  const itemEL = newItem.generateCard();
  return itemEL;
}

photoValidate.enableValidation();
profileValidate.enableValidation();