import './index.css';

import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

import {
    penButton, popupName, popupDescription, popupFormProfile, plusButton, popupMestoName, popupMestoLink, popupMestoForm,initialCards, validationObject
} from '../utils/constants.js';

// Validation of the forms
const formValidatorProfile = new FormValidator(validationObject, popupFormProfile);
formValidatorProfile.enableValidation();

const formValidatorMesto = new FormValidator(validationObject, popupMestoForm);
formValidatorMesto.enableValidation();

// Profile popup opening and closing logic

const changeUserInfo = new UserInfo ('.profile__name', '.profile__description');
const popupProfileHandler = new PopupWithForm ('#popup-profile', (evt) => {
    evt.preventDefault();
    changeUserInfo.setUserInfo({
        popupName: popupName.value, 
        popupDescription: popupDescription.value
    });
    popupProfileHandler.close();
});

penButton.addEventListener('click', () => {
    const userInfo = changeUserInfo.getUserInfo();
    popupName.value = userInfo.name;
    popupDescription.value = userInfo.description;
    popupProfileHandler.open();
});
popupProfileHandler.setEventListeners();

// Image popup opening and closing logic
const popupImageHandler = new PopupWithImage ('#popup_picture');

popupImageHandler.setEventListeners();

// Mesto popup opening and closing logic
const popupMestoHandler = new PopupWithForm ('#popup-mesto', (evt) => {
    evt.preventDefault();
    
    const newCard = new Section({
        items: [{
            name: popupMestoName.value,
            link: popupMestoLink.value
        }],
        renderer: (item) => {
          const card = new Card(item.name, item.link, '#photo-grid__item', popupImageHandler.open);
          const cardElement = card.generateCard();
          cardList.addItem(cardElement);
        }
    }, '.photo-grid');
    newCard.renderItems();

    popupMestoHandler.close();
    formValidatorMesto.disableButton();
});

popupMestoHandler.setEventListeners();
plusButton.addEventListener('click', function () {
    popupMestoHandler.open();
});

// Initial cards creation
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      const card = new Card(item.name, item.link, '#photo-grid__item', popupImageHandler.open);
      const cardElement = card.generateCard();
      cardList.addItem(cardElement);
    }
}, '.photo-grid');

cardList.renderItems();