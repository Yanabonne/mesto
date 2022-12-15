export default class UserInfo {
  constructor(nameSelector, descriptionSelector, imageSelector) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._image = document.querySelector(imageSelector);
    this._name = document.querySelector(this._nameSelector);
    this._description = document.querySelector(this._descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      description: this._description.textContent,
    };
  }

  setUserAvatar(image) {
    this._image.src = image;
  }

  setUserInfo(data) {
    this._name.textContent = data.popupName;
    this._description.textContent = data.popupDescription;
  }
}
