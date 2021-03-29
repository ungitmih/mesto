export class FormValidator {
  constructor(validationSelector, form) {
    this._form = form
    this._inputSelector = validationSelector.inputSelector
    this._submitButtonSelector = validationSelector.submitButtonSelector
    this._inactiveButtonClass = validationSelector.inactiveButtonClass
    this._inputErrorClass = validationSelector.inputErrorClass
    this._errorClass = validationSelector.errorClass
    this._inputs = Array.from(this._form.querySelectorAll(this._inputSelector));
  }

  //показать сообщение об ошибке
  _showError () {
    this._inputElement.classList.add(this._inputErrorClass);
    this._errorElement.classList.add(this._errorClass);
    this._errorElement.textContent = this._inputElement.validationMessage;
  }

  //скрыть сообщение об ошибке
  _hideError (inputElement) {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  }

  //проверка на валидность поля
  _inputValidate (inputElement) {
    this._inputElement = inputElement
    this._errorElement = this._form.querySelector(`.${this._inputElement.id}-error`);
    if (!this._inputElement.validity.valid) {
      this._showError()
    } else {
      this._hideError(inputElement)
    }
  }

  _inputIsValid () {
    return this._inputs.some((inputElement) => {
      return !inputElement.validity.valid
    })
  }

  //изменение состояния кнопки
  disabledButton () {
    this._buttonElement.classList.add(this._inactiveButtonClass)
    this._buttonElement.setAttribute('disabled', true);
  }

  _buttonToggle () {
    if (this._inputIsValid()) {
      this.disabledButton()
    } else {
      this._buttonElement.classList.remove(this._inactiveButtonClass)
      this._buttonElement.removeAttribute('disabled');
    }
  }

  //слушатели для полей ввода
  _setEventListeners () {
    this._buttonElement = this._form.querySelector(this._submitButtonSelector)
    this._buttonToggle()
    this._inputs.forEach((inputElement) => {
      inputElement.addEventListener("input",() => {
        this._inputValidate (inputElement)
        this._buttonToggle()
      })
    })
  }

  //валидация полей
  enableValidation () {
    this._setEventListeners()
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault()
      this._buttonToggle()
    })
  }

  //очистка полей
  resetForm () {
    this._inputs.forEach((form) => {
      this._hideError (form)
    });
    this._buttonToggle()
  }
}