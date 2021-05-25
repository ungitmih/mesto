export default class UserInfo {
  constructor({profileName, profileDescription, profileAvatar}) {
    this._profileName = document.querySelector(profileName)
    this._profileDescription = document.querySelector(profileDescription)
    this._profileAvatar = document.querySelector(profileAvatar)
  }
  
  getUserInfo () {
    const userDetails = {
      name: this._profileName.textContent,
      about: this._profileDescription.textContent,
      avatar: this._profileAvatar.src
    }
    return userDetails;
  }

  setUserInfo ({name, about, avatar}) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = about;
    if (avatar) {
    this._profileAvatar.src = avatar;
    }
  }
}