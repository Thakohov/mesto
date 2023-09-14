import Popup from "./Popup";

class PopupWithConfirmation extends Popup {
  constructor(popup) {
    super(popup);
    this._form = this.popup.querySelector(".popup__form");
    this.submitButton = this._form.querySelector(".popup__save");
    // this._formSubmit = formSubmit;
  }

  open(id) {
    this._id = id;
    super.open();
  }

  formSubmitCallback(id) {
    this._formSubmit = id
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit(this._id);
      this.close();
    });
  }

  close() {
    super.close();
  }
}

export default PopupWithConfirmation;
