import {Card} from './Card.js';
import {FormValidator} from "./FormValidator.js";

const popupProfile = document.querySelector(".popup-profile");
const popupAddPhoto = document.querySelector(".popup-photo");
export const popupOpenImage = document.querySelector(".popup-image");

export const popupPicture = document.querySelector('.popup__picture');
export const popupPictureName = document.querySelector('.popup__picturecaption');

const buttonEdit = document.querySelector(".profile__edit-button");
const buttonAdd = document.querySelector(".profile__add-button");

const buttonCloseProfile = popupProfile.querySelector(".popup__close");
const buttonClosePhoto = popupAddPhoto.querySelector(".popup__close");
const buttonCloseImage = popupOpenImage.querySelector(".popup__close");

const name = document.querySelector(".profile__name");
const job = document.querySelector(".profile__description");

const nameInput = document.querySelector('#profile-name');
const jobInput = document.querySelector('#profile-description');

const nameInputPhoto = document.querySelector('#photo-name');
const linkInputPhoto = document.querySelector('#photo-link');

const formElementProfile = popupProfile.querySelector(".form");
const formElementPhoto = popupAddPhoto.querySelector(".form");

const elementsItems = document.querySelector('.elements__items');

//карточки
const initialCards = [{
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

initialCards.forEach((item) => {
  const itemEL = new Card(item, '.elements-template' );
  const newItem = itemEL.generateCard();
  elementsItems.append(newItem)
})

const formValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__profile-save',
  inactiveButtonClass: 'form__button-disabled',
  inputErrorClass: 'form__field-invalid',
  errorClass: 'form__error'
};

//открытие попапов
export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeOnEsc);
}

buttonEdit.addEventListener("click", () => {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(popupProfile);
  profileValidate.enableValidation();
  profileValidate.resetForm();
})
buttonAdd.addEventListener("click", () => {
  openPopup(popupAddPhoto);
  photoValidate.enableValidation();
  photoValidate.resetForm()
})

//закрытие попапов
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.removeEventListener('keydown', closeOnEsc);
}

buttonCloseProfile.addEventListener("click", () => {
  closePopup(popupProfile);
})
buttonClosePhoto.addEventListener("click", () => {
  closePopup(popupAddPhoto);
})
buttonCloseImage.addEventListener("click", () => {
  closePopup(popupOpenImage);
})

const profileValidate = new FormValidator(formValidation, formElementProfile)
const photoValidate = new FormValidator(formValidation, formElementPhoto)

//закрытие попапов по нажатию на темный фон
function closeOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target)
  }
}

//закрытие попапов по нажатию на escape
function closeOnEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'))
  }
}

popupProfile.addEventListener('mousedown', closeOverlay);
popupAddPhoto.addEventListener('mousedown', closeOverlay);
popupOpenImage.addEventListener('mousedown', closeOverlay);

//отправка формы профиля
function formSubmitHandler(evt) {
  evt.preventDefault();

  name.textContent = nameInput.value;
  job.textContent = jobInput.value;

  closePopup(popupProfile);
}

//отправка формы фотографий
function formSubmitHandlerPhoto(evt) {
  evt.preventDefault();

  const photoName = nameInputPhoto.value;
  const photoLink = linkInputPhoto.value;

  const itemsEL = new Card({name: photoName, link: photoLink}, '.elements-template')
  const newCard = itemsEL.generateCard();
  elementsItems.prepend(newCard);

  linkInputPhoto.value = ''
  nameInputPhoto.value = ''

  closePopup(popupAddPhoto);
}

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', formSubmitHandlerPhoto);
