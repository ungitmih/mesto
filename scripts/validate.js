const formValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__profile-save',
  inactiveButtonClass: 'form__button-disabled',
  inputErrorClass: 'form__field-invalid',
  errorClass: 'form__error'
};

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
  }else {
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
    inputElement.addEventListener("input",() => {
      inputValidate(formElement, inputElement, errorClass, inputErrorClass)
      buttonToggle(inputList, buttonElement, inactiveButtonClass);
    })
  })
  buttonToggle(inputList, buttonElement, inactiveButtonClass);
}

//валидация полей
const enableValidation = ({formSelector, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach(formElement => {
    formElement.addEventListener('submit', evt => {
      evt.preventDefault();
    });
    setEventListeners(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass);
  });
}

enableValidation(formValidation);
