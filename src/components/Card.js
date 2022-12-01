import likeButton from "../images/like-button.svg";
import likeButttonBlack from "../images/like-button_black.svg";

export default class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".photo-grid__item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._photo = this._element.querySelector(".photo-grid__picture");

    this._photo.setAttribute("src", this._link);
    this._photo.setAttribute("alt", this._name);
    this._element.querySelector(".photo-grid__title").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }

  _likeHandler(evt) {
    const eventTarget = evt.target;
    eventTarget.src = eventTarget.classList.contains("photo-grid__like_active")
      ? likeButton
      : likeButttonBlack;
    eventTarget.classList.toggle("photo-grid__like_active");
  }

  _setEventListeners() {
    this._element
      .querySelector(".photo-grid__trash-button")
      .addEventListener("click", () => {
        this._element.remove();
      });

    this._element
      .querySelector(".photo-grid__like")
      .addEventListener("click", this._likeHandler);

    this._photo.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }
}
