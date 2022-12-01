import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import { initialCards, validationObject } from "../utils/constants.js";

const penButton = document.querySelector(".profile__edit");
const popupProfile = document.querySelector("#popup-profile");
const popupName = popupProfile.querySelector("#popup-name");
const popupDescription = popupProfile.querySelector("#popup-description");
const popupFormProfile = popupProfile.querySelector(".form");

const plusButton = document.querySelector(".profile__add-button");
const popupMesto = document.querySelector("#popup-mesto");
const popupMestoName = popupMesto.querySelector("#popup-mesto-name");
const popupMestoLink = popupMesto.querySelector("#popup-link");
const popupMestoForm = popupMesto.querySelector(".form");

// Validation of the forms
const formValidatorProfile = new FormValidator(
  validationObject,
  popupFormProfile
);
formValidatorProfile.enableValidation();

const formValidatorMesto = new FormValidator(validationObject, popupMestoForm);
formValidatorMesto.enableValidation();

// Profile popup opening and closing logic

const changeUserInfo = new UserInfo(".profile__name", ".profile__description");
const popupProfileHandler = new PopupWithForm("#popup-profile", (evt) => {
  evt.preventDefault();
  changeUserInfo.setUserInfo({
    popupName: popupName.value,
    popupDescription: popupDescription.value,
  });
  popupProfileHandler.close();
});

penButton.addEventListener("click", () => {
  const userInfo = changeUserInfo.getUserInfo();
  popupName.value = userInfo.name;
  popupDescription.value = userInfo.description;
  popupProfileHandler.open();
});
popupProfileHandler.setEventListeners();

// Image popup opening and closing logic
const popupImageHandler = new PopupWithImage("#popup_picture");

popupImageHandler.setEventListeners();

// Mesto popup opening and closing logic
const cardsContainer = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        "#photo-grid__item",
        popupImageHandler.open
      );
      const cardElement = card.generateCard();
      cardsContainer.addItem(cardElement);
    },
  },
  ".photo-grid"
);

const popupMestoHandler = new PopupWithForm("#popup-mesto", (evt) => {
  evt.preventDefault();

  cardsContainer.renderItems([
    {
      name: popupMestoName.value,
      link: popupMestoLink.value,
    },
  ]);

  popupMestoHandler.close();
  formValidatorMesto.disableButton();
});

popupMestoHandler.setEventListeners();
plusButton.addEventListener("click", function () {
  popupMestoHandler.open();
});

// Initial cards creation
cardsContainer.renderItems(initialCards);
