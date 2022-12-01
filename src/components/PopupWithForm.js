import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, submitForm) {
    super(popupSelector);
    this._submitForm = submitForm;
    this._form = this._popup.querySelector(".form");
  }

  close() {
    this._form.reset();
    super.close();
  }

  setEventListeners() {
    this._popup.addEventListener("submit", this._submitForm);
    super.setEventListeners();
  }
}
