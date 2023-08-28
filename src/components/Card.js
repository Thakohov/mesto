class Card {
  constructor(data, templateSelector, handleCardClick) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  _setData() {
    this._cardImage = this._card.querySelector(".card__image");
    this._cardCaption = this._card.querySelector(".card__caption");
    this._deleteButton = this._card.querySelector(".card__trash");
    this._likeButton = this._card.querySelector(".card__button-heart");

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

  _deleteCardButton() {
    this._card.remove();
    this._card = null
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      this._toggleLikeButton();
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteCardButton();
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
}

export default Card;
