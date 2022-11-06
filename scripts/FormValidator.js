export default class FormValidator {
    constructor (settings, formSelector) {
        this._settings = settings;
        this._formSelector = formSelector;
    }

    _showInputError = (_formElement, _inputElement, _errorMessage) => {
        const _errorElement = _formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.add(`${this._settings.inputErrorClass}`);
        _errorElement.textContent = _errorMessage;
    };

    _hideInputError = (_formElement, _inputElement) => {
        const _errorElement = _formElement.querySelector(`.${_inputElement.id}-error`);
        _inputElement.classList.remove(`${this._settings.inputErrorClass}`);
        _errorElement.textContent = '';
    };

    _checkInputValidity = (_formElement, _inputElement) => {
        if (!_inputElement.validity.valid) {
          this._showInputError(_formElement, _inputElement, _inputElement.validationMessage);
        } else {
          this._hideInputError(_formElement, _inputElement);
        }
    };

    _setEventListeners = (_formElement) => {
        const _inputList = Array.from(_formElement.querySelectorAll(`${this._settings.inputSelector}`));
        const _self = this;
        const _buttonElement = _formElement.querySelector(`${this._settings.submitButtonSelector}`)
        this._toggleButtonState(_inputList, _buttonElement);
        _inputList.forEach((_inputElement) => {
          _inputElement.addEventListener('input', function () {
            _self._checkInputValidity(_formElement, _inputElement);
            _self._toggleButtonState(_inputList, _buttonElement);
          });
        });
    };

    enableValidation = () => {
        const _formList = Array.from(document.querySelectorAll(`${this._formSelector}`));
        _formList.forEach((_form) => {
          this._setEventListeners(_form);
        });
    };

    _hasInvalidInput (_inputList) {
        return _inputList.some((_inputElement) => {
        return !_inputElement.validity.valid;
      }); 
    };

    _toggleButtonState (_inputList, _buttonElement) {
        if (this._hasInvalidInput(_inputList)) {
          _buttonElement.classList.add(`${this._settings.inactiveButtonClass}`);
          _buttonElement.setAttribute('disabled', true);
        } else {
          _buttonElement.classList.remove(`${this._settings.inactiveButtonClass}`);
          _buttonElement.removeAttribute('disabled');
        }
    };
}