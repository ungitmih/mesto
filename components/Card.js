export default class Card {
  constructor(item, cardSelector, {handleCardClick}) {
    this._cardSelector = cardSelector
    this._name = item.name
    this._src = item.link
    this._alt = item.name
    this._handleCardClick = handleCardClick
  }

  _getTemplate () {
    const newEl = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return newEl;
  }

  _setEventListeners () {
    this._imgEl.addEventListener('click', () => {
      this._handleCardClick(this._name, this._src)
    })

    this._handleLike.addEventListener('click', () => {
      this._likePhoto()
    })

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._deletePhoto()
    })
  }

  generateCard () {
    this._element = this._getTemplate()

    this._element.querySelector('.element__title').textContent = this._name;
    this._imgEl = this._element.querySelector('.element__picture')

    this._imgEl.src = this._src;
    this._imgEl.alt = this._alt;

    this._handleLike = this._element.querySelector('.element__like')

    this._setEventListeners()
    return this._element
  }

  _deletePhoto () {
    this._element.remove();
  }

  _likePhoto () {
    this._handleLike.classList.toggle('element__like_active')
  }
}