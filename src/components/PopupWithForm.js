import Popup from "./Popup";

class PopupWithForm extends Popup {
  constructor(popup, handleSubmitForm) {
    super(popup);
    this.form = this.popup.querySelector('.popup__form');
    this.inputs = this.form.querySelectorAll(".popup__input");
    this.submitButton = this.form.querySelector(".popup__save");
    this._handleSubmitForm = handleSubmitForm;
  }

  _getInputValues() {
    this._formValues = {};

    this.inputs.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    });
  }

  close() {
    super.close();
    this.form.reset();
  }
}

export default PopupWithForm;
