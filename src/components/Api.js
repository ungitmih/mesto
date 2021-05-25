export default class Api {
  constructor({urladdress, headers}) {
    this._urladdress = urladdress
    this._headers = headers
  }

  _checkRes(res) {
    if (!res.ok) {
      return Promise.reject(`Ошибка ${res.status}`);
    }
    return res.json();
  }

  getInitialCards() {
    return fetch(`${this._urladdress}/cards`, {
      headers: this._headers
    }).then(this._checkRes)
  }

  getUserInfo() {
    return fetch(`${this._urladdress}/users/me`, {
      headers: this._headers
    }).then(this._checkRes)
  }

  editUserInfo(name, about) {
    return fetch(`${this._urladdress}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about
      })
    }).then(this._checkRes)
  }

  postCard(name, link) {
    return fetch(`${this._urladdress}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        link: link
      })
    }).then(this._checkRes)
  }

  deletePhoto(cardId) {
    return fetch(`${this._urladdress}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkRes)
  }

  likeCard(cardId) {
    return fetch(`${this._urladdress}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this._headers
    }).then(this._checkRes)
  }

  unlikeCard(cardId) {
    return fetch(`${this._urladdress}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this._headers
    }).then(this._checkRes)
  }

  editAvatar(url) {
    return fetch(`${this._urladdress}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: url
      })
    }).then(this._checkRes)
  }
}