export default class UserInfo {
  constructor({profileName, profileDescription}) {
    this._profileName = document.querySelector(profileName)
    this._profileDescription = document.querySelector(profileDescription)
  }
  
  getUserInfo () {
    const userValue = {
      name: this._profileName.textContent,
      description: this._profileDescription.textContent
    }
    return userValue;
  }

  setUserInfo ({name, description}) {
    this._profileName.textContent = name;
    this._profileDescription.textContent = description;
  }
}