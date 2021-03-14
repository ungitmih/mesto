const formValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__profile-save',
  inactiveButtonClass: 'form__button-disabled',
  inputErrorClass: 'form__field-invalid',
  errorClass: 'form__error'
};

class FormValidator {
  constructor(formElement, openFormButtons, settings) {
    this._formElement = formElement;
    this._settings = settings;
    this._openFormButtons = openFormButtons;
  }
  _getErrorElement(inputElement) {
    return this._formElement.querySelector(`#${inputElement.id}-error`);
  }
  _showInputError(inputElement, validationMessage, errorElement) {
    inputElement.classList.add(this._settings.inputErrorClass);
    errorElement.textContent = validationMessage;
    errorElement.classList.add(this._settings.errorClass);
  }
  _hideInputError(inputElement, errorElement) {
    inputElement.classList.remove(this._settings.inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._settings.errorClass);
  }
  _hasInvalidInput() {
    return this._formInputs.some(inputElement => {
      return !inputElement.validity.valid;
    })
  }
  _checkInputValidity(inputElement) {
    const errorElement = this._getErrorElement(inputElement);
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage, errorElement);
    } else {
      this._hideInputError(inputElement, errorElement);
    }
  }
  _toggleSubmitButtonState() {
    if (this._hasInvalidInput(this._formInputs)) {
      this._formSubmitButton.disabled = true;
      this._formSubmitButton.classList.add(this._settings.inactiveButtonClass);
    } else {
      this._formSubmitButton.disabled = false;
      this._formSubmitButton.classList.remove(this._settings.inactiveButtonClass);
    }
  }
  _inputEventListener(evt) {
    const inputElement = evt.target;
    this._checkInputValidity(inputElement);
    this._toggleSubmitButtonState();
  }

  _hideErrorMessages() {
    this._inputsList = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._inputsList.forEach(element => {
      element.classList.remove(this._settings.inputErrorClass);
    })
    this._errorsList = Array.from(this._formElement.querySelectorAll(`${this._settings.inputSelector}-error`));
    this._errorsList.forEach(element => {
      element.textContent = '';
      element.classList.remove(this._settings.errorClass);
    })
  }

  _setEventListeners() {
    this._formElement.addEventListener('reset', () => {
      this._hideErrorMessages();
    })
    this._formInputs = Array.from(this._formElement.querySelectorAll(this._settings.inputSelector));
    this._formSubmitButton = this._formElement.querySelector(this._settings.submitButtonSelector);
    this._openFormButtons.forEach(button => {
      button.addEventListener('click', () => {
        this._toggleSubmitButtonState();
      })
    })
    this._toggleSubmitButtonState();
    this._formInputs.forEach(inputElement => {
      inputElement.addEventListener('input', (evt) => {
        this._inputEventListener(evt);
      });
    })
  }

  enableValidation() {
    this._setEventListeners();
  }
}

/*
//показать сообщение об ошибке
const showError = (formElement, inputElement, errorMessage, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(errorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(inputErrorClass);
}
//скрыть сообщение об ошибке
const hideError = (formElement, inputElement, inputErrorClass, errorClass) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(errorClass)
  errorElement.classList.remove(inputErrorClass)
  errorElement.textContent = ""
}

//проверка на валидность поля
const inputValidate = (formElement, inputElement, inputErrorClass, errorClass) => {
  if (!inputElement.validity.valid) {
    showError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass)
  } else {
    hideError(formElement, inputElement, inputErrorClass, errorClass)
  }
}
const inputIsValid = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//изменение состояния кнопки
const buttonToggle = (inputList, buttonElement, inactiveButtonClass) => {
  if (inputIsValid(inputList)) {
    buttonElement.classList.add(inactiveButtonClass)
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass)
    buttonElement.removeAttribute('disabled');
  }
}

//слушатели для полей ввода
const setEventListeners = (formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) => {
  const inputList = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector)

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      inputValidate(formElement, inputElement, errorClass, inputErrorClass)
      buttonToggle(inputList, buttonElement, inactiveButtonClass);
    })
  })
  buttonToggle(inputList, buttonElement, inactiveButtonClass);
}

//валидация полей
const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass
}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  });
}

enableValidation(formValidation);
*/