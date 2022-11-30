import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
    constructor (popupSelector) {
        super(popupSelector);
        this._photo = this._popup.querySelector('.popup__photo');
        this._caption = this._popup.querySelector('.popup__figcaption');
    }

    open(name, link) {
        this._photo.setAttribute('src', link);
        this._photo.setAttribute('alt', name);
        this._caption.textContent = name;
        super.open();
    }
}














// class Student {
//     constructor(name, cohort) {
//         this._name = name;
//         this._cohort = cohort;
//         this._profession = null;
//         this._trainingDuration = null;
//     }

//     getInfo() {
//         return {
//             name: this._name,
//             cohort: this._cohort,
//             profession: this._profession,
//             trainingDuration: this._trainingDuration
//         }
//     }
// }

// class WebDeveloperStudent extends Student {
//     constructor(name, cohort) {
//         super(name, cohort);
//         this._profession = 'Web developer';
//         this._trainingDuration = 10;
//     }

//     getInfo() {
//         super.getInfo();
//     }
// } 

// const me = new WebDeveloperStudent('Iana', 54)

// console.log(me.getInfo())