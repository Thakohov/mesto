import Popup from "./Popup";

class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._image = this.popup.querySelector('.popup__image');
    this._caption = this.popup.querySelector('.popup__caption');
  }

  open(link, name) {
    this._image.src = link;
    this._image.alt = name;
    this._caption.textContent = name;
    super.open();
  }


  setEventListeners() {
    super.setEventListeners()
  }
}


export default PopupWithImage
