const popupProfile = document.querySelector(".popup-profile");
const popupAddPhoto = document.querySelector(".popup-photo");
const popupOpenImage = document.querySelector(".popup-image");

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
const templateEl = document.querySelector('.elements-template');

//вывод карточек
function render() {
  const html = initialCards
    .map(getItem)

    elementsItems.append(...html);
}

//список элементов
function getItem(item) {
  const newItem = templateEl.content.cloneNode(true);
  const headerEl = newItem.querySelector('.element__title');
  headerEl.textContent = item.name;
  const pictureEl = newItem.querySelector('.element__picture');
  pictureEl.src = item.link;
  pictureEl.alt = item.name;

  //лайки
  const likePhoto = newItem.querySelector(".element__like");
  likePhoto.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like_active');
    });

  const deletePhoto = newItem.querySelector('.element__delete');
  deletePhoto.addEventListener('click', handleDeletePhoto);

  //открытые изображения
  pictureEl.addEventListener('click', () => {
  popupPicture.src = pictureEl.src;
  popupPicture.alt = pictureEl.alt;
  popupPictureName.textContent = pictureEl.alt;
  openPopup(popupOpenImage);
})

  return newItem;
}

render();

//открытие попапов
const openPopup = (popup) => {
  popup.classList.add("popup_opened");
  document.addEventListener('keydown', closeOnEsc);
}

buttonEdit.addEventListener("click", () => {
nameInput.value = name.textContent; 
jobInput.value = job.textContent;
openPopup(popupProfile);
})
buttonAdd.addEventListener("click", () => {
openPopup(popupAddPhoto);
})

//закрытие попапов
const closePopup = (popup) => {
  popup.classList.remove("popup_opened");
  document.addEventListener('keydown', closeOnEsc);
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

const popupPicture = document.querySelector('.popup__picture')
const popupPictureName = document.querySelector('.popup__picturecaption')

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

//удаление фотографий
function handleDeletePhoto(evt) {
  const photoItem = evt.target;
  const photoElement = photoItem.closest('.element');
  photoElement.remove();
}

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

const itemsEL = getItem({ name: photoName, link: photoLink });
    elementsItems.prepend(itemsEL);
    linkInputPhoto.value = ''
    nameInputPhoto.value = ''

closePopup(popupAddPhoto);
}

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', formSubmitHandlerPhoto);