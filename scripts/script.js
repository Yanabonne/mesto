let penButton = document.querySelector('.profile__edit');
let popup = document.querySelector('#popup-profile');
let crossButton = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupName = document.getElementById('popup-name');
let popupDescription = document.getElementById('popup-description');
let popupForm = popup.querySelector('.form');

let plusButton = document.querySelector('.profile__add-button');
let popupMesto = document.querySelector('#popup-mesto');
let crossButtonMesto = popupMesto.querySelector('.popup__close');
let popupMestoName = document.getElementById('popup-mesto-name');
let popupMestoLink = document.getElementById('popup-link');
let popupMestoForm = popupMesto.querySelector('.form');

let hearts = document.querySelectorAll('.photo-grid__like');

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

const gridItem = document.querySelector('#photo-grid__item').content;
let grid = document.querySelector('.photo-grid');

const pictureItem = document.querySelector('#popup_picture').content;

function popupOpen() {
    popup.classList.add('popup_opened');
    popupName.value = profileName.textContent;
    popupDescription.value = profileDescription.textContent;
}

function popupClose() {
    popup.classList.remove('popup_opened');
}

function changeInfo(evt) {
    evt.preventDefault();

    profileName.textContent = popupName.value;
    profileDescription.textContent = popupDescription.value;

    popupClose();
}

function popupMestoOpen() {
    popupMesto.classList.add('popup_opened');
}

function popupMestoClose() {
    popupMesto.classList.remove('popup_opened');
}

function addMesto(evt) {
    evt.preventDefault();

    let gridCopy = gridItem.cloneNode(true);
    gridCopy.querySelector('.photo-grid__picture').setAttribute('src', popupMestoLink.value);
    gridCopy.querySelector('.photo-grid__title').textContent = popupMestoName.value;
    let photo = gridCopy.querySelector('.photo-grid__picture');
    let trash = gridCopy.querySelector('.photo-grid__trash-button');
    let heart = gridCopy.querySelector('.photo-grid__like');

    let pictureCopy = pictureItem.cloneNode(true);
    let popupPicture = pictureCopy.querySelector('.popup');
    let pictureClose = pictureCopy.querySelector('.popup__close');
    let page = document.querySelector('.page');
    
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

    pictureCopy.querySelector('.popup__photo').setAttribute('src', popupMestoLink.value);
    pictureCopy.querySelector('.popup__figcaption').textContent = popupMestoName.value;

    pictureClose.addEventListener('click', function () {
        popupPicture.classList.remove('popup_opened');
    });

    page.append(pictureCopy);

    photo.addEventListener('click', function() {
        popupPicture.classList.add('popup_opened');
    });

    grid.prepend(gridCopy);

    popupMestoLink.value = '';
    popupMestoName.value = '';
    
    popupMestoClose();
}

for (let i = 0; i < 6; i++) {
    let gridCopy = gridItem.cloneNode(true);
    gridCopy.querySelector('.photo-grid__picture').setAttribute('src', initialCards[i].link);
    gridCopy.querySelector('.photo-grid__title').textContent = initialCards[i].name;
    let photo = gridCopy.querySelector('.photo-grid__picture');
    let trash = gridCopy.querySelector('.photo-grid__trash-button');
    let heart = gridCopy.querySelector('.photo-grid__like');

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

    let pictureCopy = pictureItem.cloneNode(true);
    let popupPicture = pictureCopy.querySelector('.popup');
    let pictureClose = pictureCopy.querySelector('.popup__close');
    let page = document.querySelector('.page');

    pictureCopy.querySelector('.popup__photo').setAttribute('src', initialCards[i].link);
    pictureCopy.querySelector('.popup__figcaption').textContent = initialCards[i].name;

    pictureClose.addEventListener('click', function () {
        popupPicture.classList.remove('popup_opened');
    });

    page.append(pictureCopy);

    photo.addEventListener('click', function() {
        popupPicture.classList.add('popup_opened');
    });
    
    grid.prepend(gridCopy);
}

penButton.addEventListener('click', popupOpen);
crossButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', changeInfo);

plusButton.addEventListener('click', popupMestoOpen);
crossButtonMesto.addEventListener('click', popupMestoClose);
popupMestoForm.addEventListener('submit', addMesto);