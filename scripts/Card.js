import {popupOpenImage} from './index.js';
import {popupPicture} from './index.js';
import {popupPictureName} from './index.js';
import {openPopup} from './index.js';

export class Card {
  constructor(item, cardSelector) {
    this._cardSelector = cardSelector
    this._name = item.name
    this._src = item.link
    this._alt = item.name
  }

  _getTemplate () {
    const newItem = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  
    return newItem;
  }

  _setEventListeners () {
    this._element.querySelector('.element__picture').addEventListener('click', this._openPhoto)
    this._element.querySelector('.element__like').addEventListener('click', this._likePhoto)
    this._element.querySelector('.element__delete').addEventListener('click', this._deletePhoto)
  }
  
  _likePhoto = () => {
    this._element.querySelector('.element__like').classList.toggle('element__like_active')
  }

  _deletePhoto = () => {
    this._element.remove();
  }

  generateCard () {
    this._element = this._getTemplate()

    this._element.querySelector('.element__title').textContent = this._name;
    this._imgEl = this._element.querySelector('.element__picture')

    this._imgEl.src = this._src;
    this._imgEl.alt = this._name;
  
    this._setEventListeners()
    return this._element
  }

  _openPhoto = () => {
    popupPicture.src = this._src;
    popupPicture.alt = this._alt;
    popupPictureName.textContent = this._name;
    openPopup(popupOpenImage);
  }
}