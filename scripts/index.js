import Card from './Card.js';

import {formValidator} from './FormValidator.js';

const penButton = document.querySelector('.profile__edit');
const popupProfile = document.querySelector('#popup-profile');
const crossButtonProfile = popupProfile.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupName = popupProfile.querySelector('#popup-name');
const popupDescription = popupProfile.querySelector('#popup-description');
const popupFormProfile = popupProfile.querySelector('.form');

const plusButton = document.querySelector('.profile__add-button');
const popupMesto = document.querySelector('#popup-mesto');
const crossButtonMesto = popupMesto.querySelector('.popup__close');
const popupMestoName = popupMesto.querySelector('#popup-mesto-name');
const popupMestoLink = popupMesto.querySelector('#popup-link');
const popupMestoForm = popupMesto.querySelector('.form');
const submitButtonMesto = popupMesto.querySelector('.form__submit');

const popupPicture = document.querySelector('#popup_picture');
const pictureClose = popupPicture.querySelector('.popup__close');
const photoPopupPicture = popupPicture.querySelector('.popup__photo');
const captionPopupPicture = popupPicture.querySelector('.popup__figcaption');

const grid = document.querySelector('.photo-grid');

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

function closeByEsc(evt) {
    if (evt.key === 'Escape') {
      const openedPopup = document.querySelector('.popup_opened');
      closePopup(openedPopup); 
    }
} 

function openPopup(elem) {
    elem.classList.add('popup_opened');
    document.addEventListener('keydown', closeByEsc)
}

function closePopup(elem) {
    elem.classList.remove('popup_opened');
    document.removeEventListener('keydown', closeByEsc)
}

function changeInfo(evt) {
    evt.preventDefault();

    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;

    closePopup(popupProfile);
}

function handleOpenPopupPicture (evt) {
    const eventTarget = evt.target;
    openPopup(popupPicture);
    photoPopupPicture.setAttribute('src', eventTarget.src);
    photoPopupPicture.setAttribute('alt', eventTarget.closest('.photo-grid__item').querySelector('.photo-grid__title').textContent);
    captionPopupPicture.textContent = eventTarget.closest('.photo-grid__item').querySelector('.photo-grid__title').textContent;
}

function createCard (name, link, templateSelector, handleOpenPopup) {
    const card = new Card (name, link, templateSelector, handleOpenPopup);
    grid.prepend(card.generateCard());
}

for (let i = 0; i < initialCards.length; i++) {
    createCard(initialCards[i].name, initialCards[i].link, '#photo-grid__item', handleOpenPopupPicture);
}

penButton.addEventListener('click', function () {
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
    openPopup(popupProfile);
});
crossButtonProfile.addEventListener('click', function (evt) {
    closePopup(popupProfile);
});
popupProfile.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(popupProfile);
    };
});
popupFormProfile.addEventListener('submit', changeInfo);

plusButton.addEventListener('click', function () {
    openPopup(popupMesto);
});
crossButtonMesto.addEventListener('click', function (evt) {
    closePopup(popupMesto);
});
popupMesto.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(popupMesto);
    };
});
popupMestoForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    createCard(popupMestoName.value, popupMestoLink.value, '#photo-grid__item', handleOpenPopupPicture);
    popupMestoLink.value = '';
    popupMestoName.value = '';
    closePopup(popupMesto);
    (new formValidator).disableButton(submitButtonMesto, 'form__submit_inactive');
});

pictureClose.addEventListener('click', function () {
    closePopup(popupPicture);
});
popupPicture.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(popupPicture);
    };
});

new formValidator({
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__text_type_error'
}, document.querySelector('#form-profile')).enableValidation();

new formValidator({
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__text_type_error'
}, document.querySelector('#form-mesto')).enableValidation();