import {Card} from '../components/Card.js';
import {FormValidator} from "../components/FormValidator.js";

import {popupProfile} from "../utils/constants.js";
import {popupAddPhoto} from "../utils/constants.js";
import {popupOpenImage} from "../utils/constants.js";

import {buttonEdit} from "../utils/constants.js";
import {buttonAdd} from "../utils/constants.js";

import {buttonCloseProfile} from "../utils/constants.js";
import {buttonClosePhoto} from "../utils/constants.js";
import {buttonCloseImage} from "../utils/constants.js";

import {name} from "../utils/constants.js";
import {job} from "../utils/constants.js";

import {nameInput} from "../utils/constants.js";
import {jobInput} from "../utils/constants.js";

import {nameInputPhoto} from "../utils/constants.js";
import {linkInputPhoto} from "../utils/constants.js";

import {formElementProfile} from "../utils/constants.js";
import {formElementPhoto} from "../utils/constants.js";

import {elementsItems} from "../utils/constants.js";

import {initialCards} from "../utils/constants.js";

import {formValidation} from "../utils/constants.js";

initialCards.forEach((item) => {
  elementsItems.append(createCard(item));
})

function createCard(item) {
  const itemEL = new Card(item, '.elements-template' );
  const newItem = itemEL.generateCard();
  return newItem;
}

//открытие попапов
export const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeOnEsc);
}

buttonEdit.addEventListener("click", () => {
  nameInput.value = name.textContent;
  jobInput.value = job.textContent;
  openPopup(popupProfile);
  profileValidate.resetForm();
})
buttonAdd.addEventListener("click", () => {
  openPopup(popupAddPhoto);
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

  const itemsEL = ({name: photoName, link: photoLink})
  elementsItems.prepend(createCard(itemsEL));

  linkInputPhoto.value = ''
  nameInputPhoto.value = ''

  closePopup(popupAddPhoto);
}

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', formSubmitHandlerPhoto);

photoValidate.enableValidation();
profileValidate.enableValidation();