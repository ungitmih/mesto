let popup = document.querySelector(".popup");
let popupProfile = document.querySelector(".popup-profile");
let popupAddPhoto = document.querySelector(".popup-photo");

let buttonEdit = document.querySelector(".profile__edit-button");
let buttonAdd = document.querySelector(".profile__add-button");

let buttonClose = document.querySelector(".popup__close");
let buttonCloseProfile = document.querySelector(".popup__close-profile");
let buttonClosePhoto = document.querySelector(".popup__close-photo");

let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__description");

let nameInput = document.querySelector('#profile-name');
let jobInput = document.querySelector('#profile-description');

let nameInputPhoto = document.querySelector('#photo-name');
let linkInputPhoto = document.querySelector('#photo-link');

let formElement = document.querySelector(".form");
let formElementProfile = document.querySelector(".profile-form");
let formElementPhoto = document.querySelector(".photo-form");


//карточки
const initialCards = [
  {
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

const elementsItems = document.querySelector('.elements__items');
const templateEL = document.querySelector('.elements-template');

function render() {
  const html = initialCards
    .map(getItem)

    elementsItems.append(...html);
}

//карточки html
function getItemHTML(item) {
  return  `<li class="element">
  <img class="element__picture" src="${item.link}" alt="">
  <div class="element__container">
    <h2 class="element__title">${item.name}</h2>
    <button class="element__like" type="button" aria-label="нравится"></button>
  </div>
</li>`
}

//вывод карточек и лайки
function getItem(item) {
  const newItem = templateEL.content.cloneNode(true);
  const headerEL = newItem.querySelector('.element__title');
  headerEL.textContent = item.name;
  const pictureEL = newItem.querySelector('.element__picture');
  pictureEL.src = item.link;
  pictureEL.alt = item.name;
  const likePhoto = newItem.querySelector(".element__like");
  likePhoto.addEventListener('click', function (evt) {
    const eventTarget = evt.target;
    eventTarget.classList.toggle('element__like_active');
    });

  return newItem;
}

render();

//открытие попапов
const openPopup = (overlay) => {
  nameInput.value = name.textContent; 
  jobInput.value = job.textContent;
  overlay.classList.add("popup_opened");
}

//закрытие попапов
const close = (popup) => {
  popup.classList.remove("popup_opened");
}

//отправка формы профиля
function formSubmitHandler(evt) {
evt.preventDefault();

name.textContent = nameInput.value;
job.textContent = jobInput.value;

close(popupProfile);
close(popupAddPhoto);
}

//отправка формы фотографий
function formSubmitHandlerPhoto(evt) {
evt.preventDefault();

let PhotoName = nameInputPhoto.value;
let PhotoLink = linkInputPhoto.value;

const ItemsEL = getItem({ name: PhotoName, link: PhotoLink });
    elementsItems.prepend(ItemsEL);
    linkInputPhoto.value = ''
    nameInputPhoto.value = ''

close(popupProfile);
close(popupAddPhoto);
}

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', formSubmitHandlerPhoto);
buttonEdit.addEventListener("click", () => {
openPopup(popupProfile);
})
buttonAdd.addEventListener("click", () => {
openPopup(popupAddPhoto);
})
buttonCloseProfile.addEventListener("click", () => {close(popupProfile);})
buttonClosePhoto.addEventListener("click", () => {close(popupAddPhoto);})