import "./index.css";

import FormValidator from "../components/FormValidator.js";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";

import {
  validationObject,
  penButton,
  popupName,
  popupDescription,
  popupFormProfile,
  plusButton,
  popupMestoForm,
  popupProfileImage,
  penButtonProfileImage,
} from "../utils/constants.js";

// Validation of the forms
const formValidatorProfile = new FormValidator(
  validationObject,
  popupFormProfile
);
formValidatorProfile.enableValidation();

const formValidatorMesto = new FormValidator(validationObject, popupMestoForm);
formValidatorMesto.enableValidation();

const formValidatorProfileImage = new FormValidator(
  validationObject,
  popupProfileImage
);
formValidatorProfileImage.enableValidation();

// Api creation
const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-54",
  headers: {
    authorization: "cd0a4e61-8d40-4238-b4eb-aa04c869218e",
    "Content-Type": "application/json",
  },
});

// Profile popup opening and closing logic and profile properties
const userInfoElement = new UserInfo(
  ".profile__name",
  ".profile__description",
  ".profile__picture"
);
const profilePopup = new PopupWithForm("#popup-profile", (evt) => {
  evt.preventDefault();
  profilePopup.renderLoading(true, "Сохранить");
  const inputs = profilePopup.getInputValues();

  api
    .sendUserInfo({
      name: inputs[0],
      about: inputs[1],
    })
    .then(() => {
      userInfoElement.setUserInfo({
        popupName: popupName.value,
        popupDescription: popupDescription.value,
      });
      profilePopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      profilePopup.renderLoading(false, "Сохранить");
    });
});

penButton.addEventListener("click", () => {
  const userInfo = userInfoElement.getUserInfo();
  popupName.value = userInfo.name;
  popupDescription.value = userInfo.description;
  profilePopup.open();
});
profilePopup.setEventListeners();

// Image popup opening and closing logic
const popupImageHandler = new PopupWithImage("#popup_picture");

popupImageHandler.setEventListeners();

// Delete card popup
const popupDeleteCardHandler = new PopupWithConfirmation("#popup-delete");

// Profile Image popup
const avatarPopup = new PopupWithForm("#popup-profile-image", (evt) => {
  evt.preventDefault();
  avatarPopup.renderLoading(true, "Сохранить");
  const inputs = avatarPopup.getInputValues();

  api
    .sendAvatarInfo(inputs[0])
    .then((res) => {
      userInfoElement.setUserAvatar(`${res.avatar}`);
      avatarPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      avatarPopup.renderLoading(false, "Сохранить");
    });
});
avatarPopup.setEventListeners();
penButtonProfileImage.addEventListener("click", avatarPopup.open);

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
        () => {
          popupDeleteCardHandler.open();
          popupDeleteCardHandler.setEventListeners(() => {
            api
              .deleteCard(item._id)
              .then(() => {
                card.removeCard();
              })
              .catch((err) => {
                console.log(err);
              });
          });
        },
        () => {
          api
            .likeHandler(item._id, true)
            .then((res) => {
              card.handleLikeClick(res);
            })
            .catch((err) => {
              console.log(err);
            });
        },
        () => {
          api
            .likeHandler(item._id, false)
            .then((res) => {
              card.handleLikeClick(res);
            })
            .catch((err) => {
              console.log(err);
            });
        }
      );
      const cardElement = card.generateCard();
      api
        .getUserInfo()
        .then((resUser) => {
          card.deleteButtonHandler(resUser, item);
        })
        .catch((err) => {
          console.log(err);
        });
      card.checkIfLiked(item);
      cardsContainer.addItem(cardElement);
    },
  },
  ".photo-grid"
);

const cardPopup = new PopupWithForm("#popup-mesto", (evt) => {
  evt.preventDefault();
  cardPopup.renderLoading(true, "Создать");
  const inputs = cardPopup.getInputValues();

  api
    .sendNewPostInfo({
      name: inputs[0],
      link: inputs[1],
    })
    .then((post) => {
      cardsContainer.renderItems([post]);
      cardPopup.close();
    })
    .catch((err) => {
      console.log(err);
    })
    .finally(() => {
      cardPopup.renderLoading(false, "Создать");
    });
  formValidatorMesto.disableButton();
});

cardPopup.setEventListeners();
plusButton.addEventListener("click", function () {
  cardPopup.open();
});

// Creating initial cards and filling the user data

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfoElement.setUserInfo({
      popupName: userData.name,
      popupDescription: userData.about,
    });
    userInfoElement.setUserAvatar(userData.avatar);

    cardsContainer.renderItems(initialCards.reverse());
  })
  .catch((err) => console.log(err));
