class Card {
  constructor(
    data,
    templateSelector,
    handleCardClick,
    handleLikeClick,
    handleLikeClickDelete,
    deleteConfirmOpen,
    handleDelete,
    userId
  ) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.name;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._id = data._id;
    this._isOwner = data.owner._id;
    this._userId = userId;
    this._handleDelete = handleDelete;
    this._deleteConfirmOpen = deleteConfirmOpen;
    this._handleLikeClick = handleLikeClick;
    this._handleLikeClickDelete = handleLikeClickDelete;
    this._likes = data.likes;
  }

  _setData() {
    this._cardImage = this._card.querySelector(".card__image");
    this._cardCaption = this._card.querySelector(".card__caption");
    this._deleteButton = this._card.querySelector(".card__trash");
    this._likeButton = this._card.querySelector(".card__button-heart");
    this._likeCount = this._card.querySelector(".card__likes");

    if (this._isOwner !== this._userId) {
      this._deleteButton.remove();
    }

    this._likeCount.textContent = this._likes.length;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._alt;
    this._cardCaption.textContent = this._name;
  }

  _likeButtonIsChecked() {
    if (
      this._likes.some((user) => {
        return this._userId === user._id;
      })
    ) {
      this._likeButton.classList.add("card__heart_type_active");
    }
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardTemplate;
  }

  addLikeButton(data) {
    this._likeButton.classList.add("card__heart_type_active");
    this._likes = data.likes;
    this._likeCount.textContent = this._likes.length;
  }

  removeLikeButton(data) {
    this._likeButton.classList.remove("card__heart_type_active");
    this._likes = data.likes;
    this._likeCount.textContent = this._likes.length;
  }

  _deleteCardButton() {
    this._handleDelete(this);
  }

  _setEventListeners() {
    this._likeButton.addEventListener("click", () => {
      if (this._likeButton.classList.contains("card__heart_type_active")) {
        this._handleLikeClickDelete(this._id);
      } else {
        this._handleLikeClick(this._id);
      }
    });

    this._deleteButton.addEventListener("click", () => {
      this._deleteCardButton();
      this._deleteConfirmOpen(this._id);
    });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
  }

  generateCard() {
    this._card = this._getTemplate();
    this._setData();
    this._likeButtonIsChecked();
    this._setEventListeners();
    return this._card;
  }

  delete() {
    this._card.remove();
  }
}

export default Card;
