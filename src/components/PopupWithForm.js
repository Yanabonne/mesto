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

  renderLoading(isLoading, buttonText) {
    this._button = this._popup.querySelector('.form__submit');
    if(isLoading) {
      this._button.textContent = 'Сохранение...';
    } else {
      this._button.textContent = buttonText;
    }
  }
}
