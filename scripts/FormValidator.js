import  { validationConfig } from './constants.js'

class FormValidator {
  constructor(config, templateSelector) {
    this._config = config;
    this._templateSelector = templateSelector;
    this._formSelector = config.formSelector;
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this.form = document.querySelector(this._templateSelector);
    this._inputs = Array.from(this.form.querySelectorAll(this._inputSelector));
  }

  _showInputError(input) {
    const span = this.form.querySelector(`.${input.id}-error`);

    input.classList.add(this._inputErrorClass);
    span.textContent = input.validationMessage;
    span.classList.add(this._errorClass);
  }

  _hideInputError(input) {
    const span = this.form.querySelector(`.${input.id}-error`);

    input.classList.remove(this._inputErrorClass);
    span.textContent = "";
    span.classList.remove(this._errorClass);
  }

  _isValid(input) {
    if (!input.validity.valid) {
      this._showInputError(input);
    } else {
      this._hideInputError(input);
    }
  }

  _hasInvalidValue() {
    return this._inputs.some((input) => !input.validity.valid);
  }

  _toggleButtonState() {
    this._button = this.form.querySelector(this._submitButtonSelector);
    if (this._hasInvalidValue()) {
      this._button.classList.add(this._inactiveButtonClass);
      this._button.disabled = true;
    } else {
      this._button.classList.remove(this._inactiveButtonClass);
      this._button.disabled = false;
    }
  }

  _setEventListeners() {
    this._toggleButtonState();

    this._inputs.forEach((input) => {
      input.addEventListener("input", () => {
        this._isValid(input);
        this._toggleButtonState();
      });
    });
  }

  resetValidation() {
    this._toggleButtonState();
    this._inputs.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._setEventListeners();
  }
}

export { FormValidator, validationConfig };
