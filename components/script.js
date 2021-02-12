let popup = document.querySelector(".popup");
let popupProfile = document.querySelector(".popup-profile");
let popupAddPhoto = document.querySelector(".popup-photo");

let buttonEdit = document.querySelector(".profile__edit-button");
let buttonAdd = document.querySelector(".profile__add-button");
let buttonClose = document.querySelector(".popup__close");

let name = document.querySelector(".profile__name");
let job = document.querySelector(".profile__description");

let nameInput = document.querySelector('#profile-name');
let jobInput = document.querySelector('#profile-description');

let formElement = document.querySelector(".form");

const likePhoto = document.querySelector(".element__like");

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

function getItemHTML(item) {
  return  `<li class="element">
  <img class="element__picture" src="${item.link}" alt="">
  <div class="element__container">
    <h2 class="element__title">${item.name}</h2>
    <button class="element__like" type="button" aria-label="нравится"></button>
  </div>
</li>`
}

function getItem(item) {
  const newItem = templateEL.content.cloneNode(true);
  const headerEL = newItem.querySelector('.element__title');
  headerEL.textContent = item.name;
  const pictureEL = newItem.querySelector('.element__picture');
  pictureEL.src = item.link;
  pictureEL.alt = item.name;

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

//отправка формы
function formSubmitHandler(evt) {
evt.preventDefault();

name.textContent = nameInput.value;
job.textContent = jobInput.value;

close(popupProfile);
close(popupAddPhoto);
}

//поставить и убрать лайк
likePhoto.addEventListener('click', function (evt) {
const eventTarget = evt.target;
eventTarget.classList.toggle('element__like_active');
}); 

formElement.addEventListener('submit', formSubmitHandler);
buttonEdit.addEventListener("click", () => {
openPopup(popupProfile);
})
buttonAdd.addEventListener("click", () => {
openPopup(popupAddPhoto);
})
buttonClose.addEventListener("click", () => {
close(popupProfile);
})
buttonClose.addEventListener("click", () => {
close(popupAddPhoto);
})