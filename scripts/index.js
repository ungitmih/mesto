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

class Card {
  constructor(cardSelector) {
    this._cardSelector = cardSelector;
  }

_getTemplate() {
  const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

  return cardElement;
}

_setEventListeners() {
  this._element.addEventListener('click', () => {
    this._handleOpenPopup();
  });
}
}

class DefaultCard extends Card {
  constructor(data, cardSelector) {
    super(cardSelector);
    this._title = data.name;
    this._image = data.link;
    this._description = data.description;
  }

  generateCard() {
    this._element = super._getTemplate();
    super._setEventListeners();
    
    this._photoImage = this._element.querySelector('.element__picture');
    this._photoImage.src = this._image;
    this._photoImage.alt = `Фотография ${this._title}`;
    
    return this._element;
  }
}

const renderElements = () => {
  elementsItems.innerHTML = '';
  initialCards.forEach((item) => {
  const card = new DefaultCard(item, '.elements-template');
  const cardElement = card.generateCard();
  elementsItems.append(cardElement);
  });
};

renderElements(true);

/* Код для помощи
class Card {
  constructor(data, templateSelector, settings, ownerId, { handleCardClick, handleDeleteCardClick, setLike, deleteLike }) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._settings = settings;
    this._ownerId = ownerId
    this._handleCardClick = handleCardClick;
    this._handleDeleteCardClick = handleDeleteCardClick;
    this._setLike = setLike;
    this._deleteLike = deleteLike;
  }

  _getTemplateElement() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content
      .firstElementChild
      .cloneNode(true);
    return cardElement;
  }

  deleteCard() {
    this._deleteElem(this._element);
  }

  _deleteElem(elem) {
    elem.remove();
    elem = null;
  }

  _dislike(data) {
    this._removeLikedClass();
    this._deleteLike(data);
  }

  _like(data) {
    this._addLikedClass();
    this._setLike(data);
  }

  _removeLikedClass() {
    this._likeButton.classList.remove(this._settings.photoLikedButtonClass);
  }

  _addLikedClass() {
    this._likeButton.classList.add(this._settings.photoLikedButtonClass);
  }

  setLikeCount(data) {
    this._photoLikeCount.textContent = String(data.likes.length);
  }

  _checkIsOwnCard() {
    if (this._data.owner._id !== this._ownerId) {
      this._deleteElem(this._deleteButton);
    }
  }

  _checkLikedState() {
    this._data.likes.forEach((likeOwner) => {
      if (likeOwner._id === this._ownerId) {
        this._addLikedClass();
      }
    })
  }

  _setEventListeners() {
    this._photoImage.addEventListener('click', () => {
      this._handleCardClick(this._data);
    })
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains(this._settings.photoLikedButtonClass)) {
        this._dislike(this._data);
      } else {
        this._like(this._data);
      }
    })
    this._deleteButton.addEventListener('click', this._handleDeleteCardClick);
  }

  generateCard() {
    this._element = this._getTemplateElement();
    this._photoImage = this._element.querySelector(this._settings.photoImageSelector);
    this._photoFigcaption = this._element.querySelector(this._settings.photoFigcaptionSelector);
    this._likeButton = this._element.querySelector(this._settings.photoLikeButtonSelector);
    this._photoLikeCount = this._element.querySelector(this._settings.photoLikeCountSelector);
    this._deleteButton = this._element.querySelector(this._settings.photoDeleteButtonSelector);
    this._element.setAttribute('id', `a${this._data._id}`);
    this._photoImage.src = this._data.link;
    this._photoImage.alt = `Фотография ${this._data.name}`;
    this._photoFigcaption.textContent = this._data.name;
    this.setLikeCount(this._data)
    this._setEventListeners();
    this._checkIsOwnCard();
    this._checkLikedState();
    return this._element;
  }
}
*/

/*
//вывод карточек
function renderCard() {
  const html = initialCards
    .map(createCard)

  elementsItems.append(...html);
}

//список элементов
function createCard(item) {
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

  //удаление
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

renderCard();
*/

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

  const itemsEL = createCard({
    name: photoName,
    link: photoLink
  });
  elementsItems.prepend(itemsEL);
  linkInputPhoto.value = ''
  nameInputPhoto.value = ''

  closePopup(popupAddPhoto);
}

formElementProfile.addEventListener('submit', formSubmitHandler);
formElementPhoto.addEventListener('submit', formSubmitHandlerPhoto);
