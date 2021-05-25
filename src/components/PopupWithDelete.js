import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._formSubmitButton = this._popup.querySelector('.form__profile-save');
    this._formSubmitButtonText = this._formSubmitButton.textContent;
  }

  setEventListeners() {
    super.setEventListeners()
    this._popup.addEventListener('submit', (event) => {
      event.preventDefault()
      this._submitForm(event, this._card)
      this.close()
    })
  }

  open(card) {
    this._card = card
    super.open()
  }
}