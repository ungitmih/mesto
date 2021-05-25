export default class Card {
  constructor(item, cardSelector, {handlerCardClick, handlerLikeCard, handlerDeleteCard}, userId, cardId) {
    this._name = item.name;
    this._src = item.link;
    this._alt = item.name;
    this._cardSelector = cardSelector;
    this._handlerCardClick = handlerCardClick;
    this._handlerLikeCard = handlerLikeCard;
    this._handlerDeleteCard = handlerDeleteCard;
    this._likesCount = item.likes;
    this._userID = userId;
    this._cardID = cardId;
    this._ownerID = item.owner._id;
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
      this._handlerCardClick(this._name, this._src)
    })

    this._handleLike.addEventListener('click', () => {
      this._handlerLikeCard()
    })

    this._element.querySelector('.element__delete').addEventListener('click', () => {
      this._handlerDeleteCard()
    })
  }

  generateCard () {
    this._element = this._getTemplate()

    this._element.querySelector('.element__title').textContent = this._name;
    this._imgEl = this._element.querySelector('.element__picture')

    this._imgEl.src = this._src;
    this._imgEl.alt = this._alt;

    this._handleLike = this._element.querySelector('.element__like')
    this._likes = this._element.querySelector('.element__like-count')
    
    this._deleteButton = this._element.querySelector('.element__delete')
    if (this._ownerID !== this._userID) {
      this._deleteButton.style.display = 'none'
    }

    this.renderLikes()

    this._setEventListeners()
    return this._element
  }

  getCardId() {
    return this._cardID
  }

  deletePhoto() {
    this._element.remove();
  }

  _likePhoto() {
    this._handleLike.classList.toggle('element__like_active')
  }

  renderLikes() {
    this._likes.textContent = this._likesCount.length
    this.showLikes(this._userID)
  }

  likedPhoto() {
    return this._likesCount.some(like => {
      return like._id === this._userID
    })
  }

  showLikes() {
    if (this.likedPhoto(this._userID)) {
      this._handleLike.classList.add('element__like_active')
    } else {
      this._handleLike.classList.remove('element__like_active')
    }
  }

  setLikes(list) {
    this._likesCount = list
  }
}