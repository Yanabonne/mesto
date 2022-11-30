import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
    constructor (popupSelector, submitForm) {
        super(popupSelector);
        this._submitForm = submitForm;
    }

    close() {
        this._popup.querySelector('.form').reset();
        super.close();
    }

    setEventListeners() {
        this._popup.addEventListener('submit', this._submitForm);
        super.setEventListeners();
    }
}