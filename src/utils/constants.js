export const popupProfile = document.querySelector(".popup-profile");
export const profilePopupSelector = '.popup-profile';
export const popupAddPhoto = document.querySelector(".popup-photo");
export const photoPopupSelector = '.popup-photo';
export const popupOpenImage = document.querySelector(".popup-image");
export const openImageSelector = '.popup-image'
export const avatarPopup = document.querySelector('.popup-update');
export const avatarPopupSelector = '.popup-update'
export const popupDeleteImage = '.popup-delete'

export const popupPicture = document.querySelector('.popup__picture');
export const popupPic = '.popup__picture'
export const popupPictureName = document.querySelector('.popup__picturecaption');
export const popupPicName = '.popup__picturecaption'

export const buttonEdit = document.querySelector(".profile__edit-button");
export const popUpEditButtonSelector = '.profile__edit-button'
export const buttonAdd = document.querySelector(".profile__add-button");
export const editImageButton = document.querySelector('.profile__image-edit');
export const editImageButtonSelector = '.profile__image-edit'

export const buttonCloseProfile = popupProfile.querySelector(".popup__close");
export const popupButtonClose = '.popup__close'
export const buttonClosePhoto = popupAddPhoto.querySelector(".popup__close");
export const buttonCloseImage = popupOpenImage.querySelector(".popup__close");

export const name = document.querySelector(".profile__name");
export const job = document.querySelector(".profile__description");

export const nameInput = document.querySelector('#profile-name');
export const jobInput = document.querySelector('#profile-description');

export const nameInputPhoto = document.querySelector('#photo-name');
export const linkInputPhoto = document.querySelector('#photo-link');


export const formElementProfile = popupProfile.querySelector(".form");
export const formElementPhoto = popupAddPhoto.querySelector(".form");

export const profileAvatar = document.querySelector('.profile__avatar');
export const formElementAvatar = avatarPopup.querySelector('.form');
export const linkInputAvatar = document.querySelector('#profile-avatar');

export const templateEl = '.elements-template'
export const elementsItems  = document.querySelector('.elements__items');
export const elementsItemsSelector = '.elements__items'

//карточки
export const initialCards = [{
  name: 'Архыз',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
},
{
  name: 'Челябинская область',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
},
{
  name: 'Иваново',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
},
{
  name: 'Камчатка',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
},
{
  name: 'Холмогорский район',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
},
{
  name: 'Байкал',
  link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
}
];

export const userId = '0e1607da5c4552b063dc1e59';

export const formValidation = {
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__profile-save',
    inactiveButtonClass: 'form__button-disabled',
    inputErrorClass: 'form__field-invalid',
    errorClass: 'form__error'
  };

export const profileSelectors = {
    profileName: '.profile__name',
    profileDescription: '.profile__description',
    profileAvatar: '.profile__avatar'
  }