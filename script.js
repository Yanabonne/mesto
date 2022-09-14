let penButton = document.querySelector('img.profile__edit');
let crossButton = document.querySelector('img.popup__close');
let popup = document.querySelector('.popup');

function popupOpen() {
    popup.classList.add('popup__opened');
}

function popupClose() {
    popup.classList.remove('popup__opened');
}

penButton.addEventListener('click', popupOpen);
crossButton.addEventListener('click', popupClose);

let popupForm = document.querySelector('.popup__form');

function changeInfo() {
    evt.preventDefault();

    let profileName = document.querySelector('.profile__name');
    let profileDescription = document.querySelector('.profile__description');

    let popupName = document.querySelector('.popup__name');
    let popupDescription = document.querySelector('.popup__description');

    profileName.textContent = popupName.value;
    profileDescription = popupDescription.value;

    popup.classList.remove('popup__opened');
}

popupForm.addEventListener('submit', changeInfo);

let heart = document.querySelector('.photo-grid__like');

function like() {
    if (heart.classList.contains('photo-grid__like_active') === false) {
        heart.src = 'images/like-button_black.svg';
        heart.classList.add('photo-grid__like_active');
    }
    else {
        heart.src = 'images/like-button.svg';
        heart.classList.remove('photo-grid__like_active');
    }
}

heart.addEventListener('click', like);