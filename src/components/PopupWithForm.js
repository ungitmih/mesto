import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector)
    this._submitForm = submitForm
    this._popupForm = this._popup.querySelector('.form')
    this._formInput = this._popup.querySelectorAll('.form__input')
  }

  _getInputValues() {
    this._inputValues = {};
    this._formInput.forEach(input => {
      this._inputValues[input.name] = input.value
    })
    return this._inputValues;
  }

  close() {
    this._popupForm.reset()
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