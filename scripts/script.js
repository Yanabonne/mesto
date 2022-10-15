const penButton = document.querySelector('.profile__edit');
const popup = document.querySelector('#popup-profile');
const crossButton = popup.querySelector('.popup__close');
const profileName = document.querySelector('.profile__name');
const profileDescription = document.querySelector('.profile__description');
const popupName = document.getElementById('popup-name');
const popupDescription = document.getElementById('popup-description');
const popupForm = popup.querySelector('.form');

const plusButton = document.querySelector('.profile__add-button');
const popupMesto = document.querySelector('#popup-mesto');
const crossButtonMesto = popupMesto.querySelector('.popup__close');
const popupMestoName = document.getElementById('popup-mesto-name');
const popupMestoLink = document.getElementById('popup-link');
const popupMestoForm = popupMesto.querySelector('.form');

const hearts = document.querySelectorAll('.photo-grid__like');

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

const popupPicture = document.querySelector('#popup_picture');
const pictureClose = popupPicture.querySelector('.popup__close');
const page = document.querySelector('.page');

function popupOpen(elem) {
    elem.classList.add('popup_opened');
}

function popupClose(elem) {
    elem.classList.remove('popup_opened');
}

function changeInfo(evt) {
    evt.preventDefault();

    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;

    popupClose(popup);
}

function addMesto (link, mestoName) {
    const gridCopy = document.querySelector('#photo-grid__item').content.cloneNode(true);
    gridCopy.querySelector('.photo-grid__picture').setAttribute('src', link);
    gridCopy.querySelector('.photo-grid__title').textContent = mestoName;
    const photo = gridCopy.querySelector('.photo-grid__picture');
    const trash = gridCopy.querySelector('.photo-grid__trash-button');
    const heart = gridCopy.querySelector('.photo-grid__like');

    heart.addEventListener('click', function (evt) {
        const eventTarget = evt.target;        
        if (eventTarget.classList.contains('photo-grid__like_active')) {
            eventTarget.src = 'images/like-button.svg';
            eventTarget.classList.remove('photo-grid__like_active');
        }
        else {
            eventTarget.src = 'images/like-button_black.svg';
            eventTarget.classList.add('photo-grid__like_active');
        }
    });

    trash.addEventListener('click', function (evt) {
        const eventTarget = evt.target;  
        eventTarget.parentElement.remove();
    });

    photo.addEventListener('click', function(evt) {
        const eventTarget = evt.target;
        popupOpen(popupPicture);
        popupPicture.querySelector('.popup__photo').setAttribute('src', eventTarget.src);
        popupPicture.querySelector('.popup__figcaption').textContent = eventTarget.nextElementSibling.firstElementChild.textContent;
    });

    popupMestoLink.value = '';
    popupMestoName.value = '';

    popupClose(popupMesto);

    return gridCopy;
}

for (let i = 0; i < 6; i++) {
    grid.prepend(addMesto(initialCards[i].link, initialCards[i].name));
}

penButton.addEventListener('click', function () {
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
    popupOpen(popup);
});
crossButton.addEventListener('click', function () {
    popupClose(popup);
});
popup.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        popupClose(popup);
    };
});
popupForm.addEventListener('submit', changeInfo);

plusButton.addEventListener('click', function () {
    popupOpen(popupMesto);
});
crossButtonMesto.addEventListener('click', function () {
    popupClose(popupMesto);
});
popupMesto.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        popupClose(popupMesto);
    };
});
popupMestoForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    grid.prepend(addMesto(popupMestoLink.value, popupMestoName.value));
});

pictureClose.addEventListener('click', function () {
    popupClose(popupPicture);
});
popupPicture.addEventListener('click', function (evt) {
    if (evt.target.classList.contains('popup')) {
        popupClose(popupPicture);
    };
});

document.addEventListener('keydown', function (evt) {
    if (evt.key === 'Escape') {
        popupClose(popup);
        popupClose(popupMesto);
        popupClose(popupPicture);
    }
});