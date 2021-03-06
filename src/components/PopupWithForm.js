import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector)
    this._submitForm = submitForm
    this._popupForm = this._popup.querySelector('.form')
    this._formInput = this._popup.querySelectorAll('.form__input')

    this._formSubmitButton = this._popup.querySelector('.form__profile-save')
    this._formSubmitButtonText = this._formSubmitButton.textContent;
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
    })
  }

  renderLoading(isLoading, initialMessage='Сохранение...') {
    if (isLoading) {
      this._formSubmitButton.textContent = initialMessage
    } else {
      this._formSubmitButton.textContent = this._formSubmitButtonText
    }
  }
}