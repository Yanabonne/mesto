export default class Card {
    constructor (name, link, templateSelector, handleOpenPopup) {
        this._name = name;
        this._link = link;
        this._templateSelector = templateSelector;
        this._handleOpenPopup = handleOpenPopup;
    }

    _getTemplate() {
        const cardElement = document
          .querySelector(this._templateSelector)
          .content
          .querySelector('.photo-grid__item')
          .cloneNode(true);
    
        return cardElement;
    }
    
    generateCard() {
        this._element = this._getTemplate();

        const photo = this._element.querySelector('.photo-grid__picture');

        photo.setAttribute('src', this._link);
        photo.setAttribute('alt', this._name);
        this._element.querySelector('.photo-grid__title').textContent = this._name;

        this._setEventListeners(photo);
    
        return this._element;
    }

    _setEventListeners(photo) {
        this._element.querySelector('.photo-grid__trash-button').addEventListener('click', () => {
            this._element.remove();
        });

        this._element.querySelector('.photo-grid__like').addEventListener('click', function (evt) {
            const eventTarget = evt.target;        
            eventTarget.src = eventTarget.classList.contains('photo-grid__like_active') ? 'images/like-button.svg' : 'images/like-button_black.svg';
            eventTarget.classList.toggle('photo-grid__like_active');
        });

        photo.addEventListener('click', (evt) => {
            this._handleOpenPopup(evt);
        });
    }
}