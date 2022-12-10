import likeButton from "../images/like-button.svg";
import likeButttonBlack from "../images/like-button_black.svg";

export default class Card {
  constructor(name, link, templateSelector, handleCardClick, likes, openDeletePopup, deletePopupSelector, closeDeletePopup, cardId, deleteCardFromServer, likeCard) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._likes = likes;
    this._openDeletePopup = openDeletePopup;
    this._deleteCard = document.querySelector(deletePopupSelector).querySelector(".form__submit");
    this._closeDeletePopup = closeDeletePopup;
    this._cardId = cardId;
    this._deleteCardFromServer = deleteCardFromServer;
    this._likeCard = likeCard;
    this._likeHandler = this._likeHandler.bind(this);
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
    this._likesCount = this._element.querySelector(".photo-grid__likes-count")

    this._photo.setAttribute("src", this._link);
    this._photo.setAttribute("alt", this._name);
    this._element.querySelector(".photo-grid__title").textContent = this._name;
    this._likesCount.textContent = this._likes;

    this._setEventListeners();

    return this._element;
  }

  _likeHandler(evt) {
    const eventTarget = evt.target;
    
    if (eventTarget.classList.contains("photo-grid__like_active")) {
      eventTarget.src = likeButton;
      this._likeCard(this._cardId, true)
      .then(res => res.json())
      .then(res => {
        this._likesCount.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      });
    } else {
      eventTarget.src = likeButttonBlack;
      this._likeCard(this._cardId, false)
      .then(res => res.json())
      .then(res => {
        this._likesCount.textContent = res.likes.length;
      })
      .catch((err) => {
        console.log(err);
      }); 
    }
    eventTarget.classList.toggle("photo-grid__like_active");
  }

  _setEventListeners() {
    this._element
      .querySelector(".photo-grid__trash-button")
      .addEventListener("click", () => {
        this._openDeletePopup();
        this._deleteCard.addEventListener("click", () => {
          this._element.remove();
          this._deleteCardFromServer(this._cardId)
          .catch((err) => {
            console.log(err);
          }); 
          this._closeDeletePopup();
        })
      });

    this._element
      .querySelector(".photo-grid__like")
      .addEventListener("click", this._likeHandler);

    this._photo.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });
  }

  deleteButtonHandler(getUserInfo, getCardOwnerInfo) {
    getUserInfo()
    .then(resUser => {
      if (!(getCardOwnerInfo.owner.name === resUser.name)) {
        this._element.querySelector(".photo-grid__trash-button").style.display = "none";
      }
    })
    .catch((err) => {
      console.log(err);
    })
  }
}
