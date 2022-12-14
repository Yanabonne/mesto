import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".form");
    this._button = this._popup.querySelector(".form__submit");
    this.getInputValues = this.getInputValues.bind(this);
  }

  close() {
    this._form.reset();
    super.close();
  }

  getInputValues() {
    const inputs = Array.from(this._form.querySelectorAll(".form__text"));
    return inputs.map((item) => item.value);
  }

  setEventListeners() {
    this._popup.addEventListener("submit", this._handleSubmit);
    super.setEventListeners();
  }

  renderLoading(isLoading, buttonText) {
    if (isLoading) {
      this._button.textContent = "Сохранение...";
    } else {
      this._button.textContent = buttonText;
    }
  }
}
