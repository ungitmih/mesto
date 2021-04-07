import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector, imageSelector, titleSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(imageSelector);
    this._caption = this._popup.querySelector(titleSelector);
  }

  open(caption, link) {
    super.open();
    this._image.alt = caption;
    this._image.src = link;
    this._caption.textContent = caption
  }
}