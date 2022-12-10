import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import { validationObject } from "../utils/constants.js";

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

const popupProfileImage = document.querySelector("#popup-profile-image");
const penButtonProfileImage = document.querySelector(".profile__edit-avatar");
const popupProfileLink = popupProfileImage.querySelector("#popup-profile-link");
const profilePicture = document.querySelector(".profile__picture");

// Validation of the forms
const formValidatorProfile = new FormValidator(
  validationObject,
  popupFormProfile
);
formValidatorProfile.enableValidation();

const formValidatorMesto = new FormValidator(validationObject, popupMestoForm);
formValidatorMesto.enableValidation();

const formValidatorProfileImage = new FormValidator(validationObject, popupProfileImage);
formValidatorProfileImage.enableValidation();
  
// Api creation
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-54',
  headers: {
    authorization: 'cd0a4e61-8d40-4238-b4eb-aa04c869218e',
    'Content-Type': 'application/json'
  }
});

// Profile popup opening and closing logic and profile properties
const changeUserInfo = new UserInfo(".profile__name", ".profile__description", ".profile__picture");
const popupProfileHandler = new PopupWithForm("#popup-profile", (evt) => {
  evt.preventDefault();
  popupProfileHandler.renderLoading(true, 'Сохранить');
  changeUserInfo.setUserInfo({
    popupName: popupName.value,
    popupDescription: popupDescription.value,
  });

  api.sendUserInfo({
    name: popupName.value,
    about: popupDescription.value
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupProfileHandler.renderLoading(false, 'Сохранить');
  })

  popupProfileHandler.close();
});

api.getUserInfo()
  .then((res) => {
    changeUserInfo.setUserInfo({
      popupName: res.name,
      popupDescription: res.about
    });
    changeUserInfo.setUserProfile(res.avatar);
  })
  .catch((err) => {
    console.log(err);
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

// Delete card popup
const popupDeleteCardHandler = new Popup("#popup-delete");

popupDeleteCardHandler.setEventListeners();

// Profile Image popup
const popupProfileImageHandler = new PopupWithForm("#popup-profile-image", (evt) => {
  evt.preventDefault();
  popupProfileImageHandler.renderLoading(true, 'Сохранить');

  api.sendAvatarInfo(popupProfileLink.value)
  .then(res => res.json())
  .then((res) => {
    profilePicture.src = `${res.avatar}`;
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {popupProfileImageHandler.renderLoading(false, 'Сохранить');})

  popupProfileImageHandler.close();
});
popupProfileImageHandler.setEventListeners();
penButtonProfileImage.addEventListener('click', popupProfileImageHandler.open)

// Mesto popup opening and closing logic
const cardsContainer = new Section(
  {
    renderer: (item) => {
      const card = new Card(
        item.name,
        item.link,
        "#photo-grid__item",
        popupImageHandler.open,
        item.likes.length,
        popupDeleteCardHandler.open,
        "#popup-delete",
        popupDeleteCardHandler.close,
        item._id,
        api.deleteCard,
        api.likeHandler
      );
      const cardElement = card.generateCard();
      card.deleteButtonHandler(api.getUserInfo, item);
      cardsContainer.addItem(cardElement);
    },
  },
  ".photo-grid"
);

const popupMestoHandler = new PopupWithForm("#popup-mesto", (evt) => {
  evt.preventDefault();
  popupMestoHandler.renderLoading(true, 'Создать');

  api.sendNewPostInfo({
    name: popupMestoName.value,
    link: popupMestoLink.value,
  })
  .then(res => res.json())
  .then((post) => {
    cardsContainer.renderItems([post]);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    popupMestoHandler.renderLoading(false, 'Создать');
  })

  popupMestoHandler.close();
  formValidatorMesto.disableButton();
});

popupMestoHandler.setEventListeners();
plusButton.addEventListener("click", function () {
  popupMestoHandler.open();
});

// Initial cards creation
api.getInitialCards()
.then((res) => {
  cardsContainer.renderItems(res.reverse());
})
.catch((err) => {
  console.log(err);
});