// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

function enableValidation(config) {
  const showInputError = (form, input) => {
    input.classList.add(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = input.validationMessage;
    span.classList.add(config.errorClass);
  };
  const hideInputError = (form, input) => {
    input.classList.remove(config.inputErrorClass);
    const span = form.querySelector(`.${input.id}-error`);
    span.textContent = "";
    span.classList.remove(config.errorClass);
  };

  const isValid = (form, input) => {
    if (!input.validity.valid) {
      showInputError(form, input);
    } else {
      hideInputError(form, input);
    }
  };

  const hasInvalidValue = (inputs) => {
    return inputs.some((input) => !input.validity.valid);
  };

  const toggleButtonState = (inputs, button) => {
    if (hasInvalidValue(inputs)) {
      button.classList.add(config.inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(config.inactiveButtonClass);
      button.disabled = false;
    }
  };

  const setEventListeners = (form) => {
    const inputs = Array.from(form.querySelectorAll(config.inputSelector));
    const button = form.querySelector(config.submitButtonSelector);
    toggleButtonState(inputs, button);
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        isValid(form, input);
        toggleButtonState(inputs, button);
      });
    });
  };

  const forms = Array.from(document.querySelectorAll(config.formSelector));

  forms.forEach((form) => {
    setEventListeners(form);
  });
}
