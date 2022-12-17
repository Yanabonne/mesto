import likeButton from "../images/like-button.svg";
import likeButttonBlack from "../images/like-button_black.svg";

export default class Card {
  constructor(
    userId,
    cardData,
    templateSelector,
    handleCardClick,
    likes,
    handleTrashClick,
    dislikeCard,
    likeCard
  ) {
    this._userId = userId;
    this._cardData = cardData;
    this._name = this._cardData.name;
    this._link = this._cardData.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
    this._handleTrashClick = handleTrashClick;
    this._dislikeCard = dislikeCard;
    this._likeCard = likeCard;
    this.updateLikes = this.updateLikes.bind(this);
    this.removeCard = this.removeCard.bind(this);
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
    this._likesCount = this._element.querySelector(".photo-grid__likes-count");

    this._photo.setAttribute("src", this._link);
    this._photo.setAttribute("alt", this._name);
    this._element.querySelector(".photo-grid__title").textContent = this._name;
    this._likesCount.textContent = this._likes;

    this._setEventListeners();
    this._checkDeleteButton();
    this._checkIfLiked();

    return this._element;
  }

  updateLikes(res) {
    if (this._like.classList.contains("photo-grid__like_active")) {
      this._like.classList.toggle("photo-grid__like_active");
      this._like.src = likeButton;
    } else {
      this._like.classList.toggle("photo-grid__like_active");
      this._like.src = likeButttonBlack;
    }
    this._likesCount.textContent = res.likes.length;
  }

  removeCard() {
    this._element.remove();
  }

  _setEventListeners() {
    this._element
      .querySelector(".photo-grid__trash-button")
      .addEventListener("click", () => {
        this._handleTrashClick();
      });

    this._like = this._element.querySelector(".photo-grid__like");

    this._like.addEventListener("click", () => {
      if (this._like.classList.contains("photo-grid__like_active")) {
        this._dislikeCard();
      } else {
        this._likeCard();
      }
    });

    this._photo.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  _checkDeleteButton() {
    if (this._cardData.owner._id !== this._userId) {
      this._element.querySelector(".photo-grid__trash-button").style.display =
        "none";
    }
  }

  _checkIfLiked() {
    const isLiked = this._cardData.likes.some((item) => {
      return item._id === this._userId;
    });
    if (isLiked) {
      this._like.src = likeButttonBlack;
      this._like.classList.toggle("photo-grid__like_active");
    }
  }
}
