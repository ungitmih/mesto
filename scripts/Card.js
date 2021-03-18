import {popupOpenImage} from './index.js';
import {popupPicture} from './index.js';
import {popupPictureName} from './index.js';

export class Card {
    constructor(item, cardSelector) {
      this._name = item.name
      this._link = item.link
      this._cardSelector = cardSelector
      this._alt = item.name
    }
    _getTemplate () {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.element')
        .cloneNode(true);
  
      return cardElement;
    }
    generateCard () {
      this._element = this._getTemplate()
  
      this._element.querySelector('.element__title').textContent = this._name; // Добавляем название
      this._element.querySelector('.element__picture').src = this._link; // Добавляем ссылку
      this._element.querySelector('.element__picture').alt = this._name; // Добавляем alt
  
      this._setEventListeners()
      return this._element
    }
    _setEventListeners () {
      this._element.querySelector('.element__delete').addEventListener('click', this._removeCard)
      this._element.querySelector('.element__like').addEventListener('click', this._likeButton)
      this._element.querySelector('.element__picture').addEventListener('click', this._openImage)
    }
  
    _removeCard = () => {
      this._element.remove();
  }
    _likeButton = () => {
      this._element.querySelector('.element__like').classList.toggle('element__like_active')
    }
  
    _openImage = () => {
      popupPicture.src = this._link;
      popupPicture.alt = this._alt;
      popupPictureName.textContent = this._name;
      handlePopupOpen(popupOpenImage);
    }
  }
  
  const handlePopupOpen = (popup) => {
    popup.classList.add('popup_opened');
  } // Функция открытия попапа