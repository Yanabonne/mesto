const showInputError = (formElement, inputElement, errorMessage, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${settings.inputErrorClass}`);
    errorElement.textContent = errorMessage;
};

const hideInputError = (formElement, inputElement, settings) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${settings.inputErrorClass}`);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement, settings) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage, settings);
    } else {
      hideInputError(formElement, inputElement, settings);
    }
};

const setEventListeners = (formElement, settings) => {
    const inputList = Array.from(formElement.querySelectorAll(`${settings.inputSelector}`));
    const buttonElement = formElement.querySelector(`${settings.submitButtonSelector}`)
    toggleButtonState(inputList, buttonElement, settings);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement, settings);
        toggleButtonState(inputList, buttonElement, settings);
      });
    });
};

const enableValidation = (settings) => {
    const formList = Array.from(document.querySelectorAll(`${settings.formSelector}`));
    formList.forEach((form) => {
      setEventListeners(form, settings);
    });
};

function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};

function toggleButtonState (inputList, buttonElement, settings) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${settings.inactiveButtonClass}`);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(`${settings.inactiveButtonClass}`);
      buttonElement.removeAttribute('disabled');
    }
};

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__text',
    submitButtonSelector: '.form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__text_type_error'
  }); 