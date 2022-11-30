export const penButton = document.querySelector('.profile__edit');
export const popupProfile = document.querySelector('#popup-profile');
export const popupName = popupProfile.querySelector('#popup-name');
export const popupDescription = popupProfile.querySelector('#popup-description');
export const popupFormProfile = popupProfile.querySelector('.form');

export const plusButton = document.querySelector('.profile__add-button');
export const popupMesto = document.querySelector('#popup-mesto');
export const popupMestoName = popupMesto.querySelector('#popup-mesto-name');
export const popupMestoLink = popupMesto.querySelector('#popup-link');
export const popupMestoForm = popupMesto.querySelector('.form');

export const popupPicture = document.querySelector('#popup_picture');
export const pictureClose = popupPicture.querySelector('.popup__close');
export const photoPopupPicture = popupPicture.querySelector('.popup__photo');
export const captionPopupPicture = popupPicture.querySelector('.popup__figcaption');

export const initialCards = [
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

export const validationObject = { 
    inputSelector: '.form__text', 
    submitButtonSelector: '.form__submit', 
    inactiveButtonClass: 'form__submit_inactive', 
    inputErrorClass: 'form__text_type_error' 
};