import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector)
    this._submitForm = submitForm
  }

  _getInputValues() {
    this._popupForm = this._popup.querySelectorAll('.form__input')
    this._inputValues = {};
    this._popupForm.forEach(input => {
      this._inputValues[input.name] = input.value
    })
    return this._inputValues;
  }

  close() {
    this._popup.querySelector('.form').reset()
    super.close()
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitForm(this._getInputValues())
      this.close()
    })
  }
}