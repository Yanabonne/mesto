import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._button = this._popup.querySelector(".form__submit");
  }

  close() {
    this._button.removeEventListener("click", this._handleButton);
    super.close();
  }

  setEventListeners(deleteCard) {
    this._handleButton = () => {
      deleteCard();
      this.close();
    };
    this._button.addEventListener("click", this._handleButton);
    super.setEventListeners();
  }
}
