const errors = {
    formSelector: 'form',
    inputSelector: 'form__text',
    submitButtonSelector: 'form__submit',
    inactiveButtonClass: 'form__submit_inactive',
    inputErrorClass: 'form__text_type_error',
    errorClass: 'form__input-error_active',
    fieldsetSelector: 'form__set'
}; 

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(`${errors.inputErrorClass}`);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(`${errors.errorClass}`);
};

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(`${errors.inputErrorClass}`);
    errorElement.classList.remove(`${errors.errorClass}`);
    errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
      showInputError(formElement, inputElement, inputElement.validationMessage);
    } else {
      hideInputError(formElement, inputElement);
    }
};

const setEventListeners = (formElement) => {
    const inputList = Array.from(formElement.querySelectorAll(`.${errors.inputSelector}`));
    const buttonElement = formElement.querySelector(`.${errors.submitButtonSelector}`)
    toggleButtonState(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        checkInputValidity(formElement, inputElement);
      inputElement.addEventListener('input', function () {
        checkInputValidity(formElement, inputElement);
        toggleButtonState(inputList, buttonElement);
      });
    });
};

const enableValidation = () => {
    const formList = Array.from(document.querySelectorAll(`.${errors.formSelector}`));
    formList.forEach((formElement) => {
      formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });
      const fieldsetList = Array.from(formElement.querySelectorAll(`.${errors.fieldsetSelector}`));
      fieldsetList.forEach(function (fieldset) {
        setEventListeners(fieldset);
      })
    });
};

function hasInvalidInput (inputList) {
    return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  }); 
};

function toggleButtonState (inputList, buttonElement) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(`${errors.inactiveButtonClass}`);
    } else {
      buttonElement.classList.remove(`${errors.inactiveButtonClass}`);
    }
};

enableValidation();

penButton.addEventListener('click', enableValidation);
plusButton.addEventListener('click', enableValidation)