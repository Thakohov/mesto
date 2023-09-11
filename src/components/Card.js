class Card {
  constructor(data, templateSelector, handleCardClick, deleteConfirmOpen, handleDelete, _id) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._id = _id;
    this._handleDelete = handleDelete;
    this._deleteConfirmOpen = deleteConfirmOpen;
  }

  _setData() {
    this._cardImage = this._card.querySelector(".card__image");
    this._cardCaption = this._card.querySelector(".card__caption");
    this._deleteButton = this._card.querySelector(".card__trash");
    this._likeButton = this._card.querySelector(".card__button-heart");
    this._likeCount = this._card.querySelector(".card__likes");

    // if (this._id !== this._userId) {
    //   this._deleteButton.remove();
    // }

    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._cardCaption.textContent = this._name;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardTemplate;
  }

  _toggleLikeButton() {
    this._likeButton.classList.toggle("card__heart_type_active");
  }

  _likeButtonCount() {

  }

  _deleteCardButton() {
    this._handleDelete(this._id);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._toggleLikeButton();
      this._likeButtonCount();
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteConfirmOpen();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._link, this._name);
    })
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setData();
    this._setEventListeners();
    return this._card;
  }

  remove() {
    this._card.remove();
    this._card = null
  }
}

export default Card;