import Popup from "./Popup";

class PopupWithConfirmation extends Popup {
  constructor(popup, formSubmit) {
    super(popup);
    this._form = this.popup.querySelector(".popup__form");
    this.submitButton = this._form.querySelector(".popup__save");
    this._formSubmit = formSubmit;
  }

  open() {
    super.open();
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit();
      this.close();
    });
  }

  close() {
    super.close();
  }
}

export default PopupWithConfirmation;
