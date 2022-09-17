let penButton = document.querySelector('.profile__edit');
let crossButton = document.querySelector('.popup__close');
let popup = document.querySelector('.popup');
let profileName = document.querySelector('.profile__name');
let profileDescription = document.querySelector('.profile__description');
let popupName = document.getElementById('popup-name');
let popupDescription = document.getElementById('popup-description');
let popupForm = document.querySelector('.form');

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

penButton.addEventListener('click', popupOpen);
crossButton.addEventListener('click', popupClose);
popupForm.addEventListener('submit', changeInfo);

/* let heart = document.querySelector('.photo-grid__like');

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

heart.addEventListener('click', like); */