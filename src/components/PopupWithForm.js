import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popup, handleSubmitForm) {
    super(popup);
    this.form = this.popup.querySelector('.popup__form');
    this._inputs = this.form.querySelectorAll(".popup__input");
    this.submitButton = this.form.querySelector(".popup__save");
    this._handleSubmitForm = handleSubmitForm;
    this.initialText = this.submitButton.textContent;
  }

  _getInputValues() {
    this._formValues = {};

    this._inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
      this.close();
    });
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this.submitButton.textContent = 'Сохранение...'
    } else {
      this.submitButton.textContent = this.initialText;
    }
  }

  close() {
    super.close();
    this.form.reset();
  }
}

export default PopupWithForm;
