export default class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
  }

  getUserInfo() {
    this._name = document.querySelector(this._nameSelector);
    this._description = document.querySelector(this._descriptionSelector);
    return {
      name: this._name.textContent,
      description: this._description.textContent,
    };
  }

  setUserInfo(data) {
    this._name.textContent = data.popupName;
    this._description.textContent = data.popupDescription;
  }
}
