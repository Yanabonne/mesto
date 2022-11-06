import {openPopup, popupPicture, photoPopupPicture, captionPopupPicture} from './index.js'

export default class Card {
    constructor (mestoName, link, templateSelector) {
        this._mestoName = mestoName;
        this._link = link;
        this._templateSelector = templateSelector;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .cloneNode(true);
    
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();

        const photo = this._element.querySelector('.photo-grid__picture');

        photo.setAttribute('src', this._link);
        photo.setAttribute('alt', this._mestoName);
        this._element.querySelector('.photo-grid__title').textContent = this._mestoName;

        this._setEventListeners(photo);
    
        return this._element;
    }

    _setEventListeners(photo) {
        this._element.querySelector('.photo-grid__trash-button').addEventListener('click', function (evt) {
            const eventTarget = evt.target;  
            eventTarget.closest('.photo-grid__item').remove();
        });

        this._element.querySelector('.photo-grid__like').addEventListener('click', function (evt) {
            const eventTarget = evt.target;        
            if (eventTarget.classList.contains('photo-grid__like_active')) {
                eventTarget.src = 'images/like-button.svg';
            }
            else {
                eventTarget.src = 'images/like-button_black.svg';
            }
            eventTarget.classList.toggle('photo-grid__like_active');
        });

        photo.addEventListener('click', function(evt) {
            const eventTarget = evt.target;
            openPopup(popupPicture);
            photoPopupPicture.setAttribute('src', eventTarget.src);
            photoPopupPicture.setAttribute('alt', eventTarget.closest('.photo-grid__item').querySelector('.photo-grid__title').textContent);
            captionPopupPicture.textContent = eventTarget.closest('.photo-grid__item').querySelector('.photo-grid__title').textContent;
        });
    }
}