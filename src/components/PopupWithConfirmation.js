import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._button = this._popup.querySelector(".form__submit");
    this.setCallback = this.setCallback.bind(this);
  }

  setCallback(submitCB) {
    this._handleSubmit = submitCB;
  }

  setEventListeners() {
    this._button.addEventListener("click", () => {
      this._handleSubmit();
    });
    super.setEventListeners();
  }
}
