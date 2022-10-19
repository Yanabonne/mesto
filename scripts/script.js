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

const grid = document.querySelector('.photo-grid');
const gridItem = document.querySelector('#photo-grid__item');

const popupPicture = document.querySelector('#popup_picture');
const pictureClose = popupPicture.querySelector('.popup__close');
const page = document.querySelector('.page');
const photoPopupPicture = popupPicture.querySelector('.popup__photo');
const captionPopupPicture = popupPicture.querySelector('.popup__figcaption');

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

function addMesto (link, mestoName) {
    const gridCopy = gridItem.content.cloneNode(true);
    const photo = gridCopy.querySelector('.photo-grid__picture');
    photo.setAttribute('src', link);
    photo.setAttribute('alt', mestoName);
    gridCopy.querySelector('.photo-grid__title').textContent = mestoName;
    const trash = gridCopy.querySelector('.photo-grid__trash-button');
    const heart = gridCopy.querySelector('.photo-grid__like');

    heart.addEventListener('click', function (evt) {
        const eventTarget = evt.target;        
        if (eventTarget.classList.contains('photo-grid__like_active')) {
            eventTarget.src = 'images/like-button.svg';
        }
        else {
            eventTarget.src = 'images/like-button_black.svg';
        }
        eventTarget.classList.toggle('photo-grid__like_active');
    });

    trash.addEventListener('click', function (evt) {
        const eventTarget = evt.target;  
        eventTarget.closest('.photo-grid__item').remove();
    });

    photo.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        openPopup(popupPicture);
        photoPopupPicture.setAttribute('src', eventTarget.src);
        photoPopupPicture.setAttribute('alt', eventTarget.closest('.photo-grid__item').querySelector('.photo-grid__title').textContent);
        captionPopupPicture.textContent = eventTarget.closest('.photo-grid__item').querySelector('.photo-grid__title').textContent;
    });

    return gridCopy;
}

for (let i = 0; i < 6; i++) {
    grid.prepend(addMesto(initialCards[i].link, initialCards[i].name));
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
    grid.prepend(addMesto(popupMestoLink.value, popupMestoName.value));
    popupMestoLink.value = '';
    popupMestoName.value = '';
    closePopup(popupMesto);
    submitButtonMesto.setAttribute('disabled', true);
    submitButtonMesto.classList.add('form__submit_inactive');

});

pictureClose.addEventListener('click', function () {
    closePopup(popupPicture);
});
popupPicture.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(popupPicture);
    };
});