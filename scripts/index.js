const popupProfile = document.querySelector(".profile__edit");
const popupOpened = document.querySelector(".popup_type_profile");
const buttonCloseProfile = popupOpened.querySelector(".popup__close");

const popupProfileForm = document.querySelector(".popup__form_type_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

const profileAuthor = document.querySelector(".profile__author");
const profileDescription = document.querySelector(".profile__description");

const cards = document.querySelector(".cards");
const cardsList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card").content.querySelector(".card");
const card = document.querySelector(".card");

const popupAddCard = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".profile__button");
const buttonCloseCard = popupAddCard.querySelector(".popup__close");
const popupCardForm = document.querySelector(".popup__form_type_card");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");
const PopupImageCloseButton = popupTypeImage.querySelector(".popup__close");

const inputPlace = popupCardForm.querySelector(".popup__input_type_place");
const inputSrc = popupCardForm.querySelector(".popup__input_type_src");

const createCard = (initialCards) => {
  const initialCardsElement = cardTemplate.cloneNode(true);
  const cardName = initialCardsElement.querySelector(".card__caption");
  const cardImage = initialCardsElement.querySelector(".card__image");
  const deleteButton = initialCardsElement.querySelector(".card__trash");
  const likeButton = initialCardsElement.querySelector(".card__heart");

  cardName.textContent = initialCards.name;
  cardImage.src = initialCards.link;
  cardImage.alt = initialCards.name;

  deleteButton.addEventListener("click", () => {
    initialCardsElement.remove();
  });

  likeButton.addEventListener("click", () => {
    likeButton.classList.toggle("card__heart_type_active");
  });

  cardImage.addEventListener("click", () => {
    popupTypeImage.classList.add("popup_opened");
    popupImage.src = initialCards.link;
    popupCaption.textContent = initialCards.name;
  });

  return initialCardsElement;
};

const renderCards = () => {
  initialCards.forEach((item) => {
    const cardHTML = createCard(item);
    cardsList.append(cardHTML);
  });
};
renderCards();

function closePopupImage() {
  popupTypeImage.classList.remove("popup_opened");
}

const addNewCard = (evt) => {
  evt.preventDefault();
  const newCard = createCard({ name: inputPlace.value, link: inputSrc.value });
  cardsList.prepend(newCard);
  closepopupButton();
  inputPlace.value = "";
  inputSrc.value = "";
};

function addpopupButton() {
  popupAddCard.classList.add("popup_opened");
}

function closepopupButton() {
  popupAddCard.classList.remove("popup_opened");
  inputPlace.value = "";
  inputSrc.value = "";
}

function togglePopupProfile() {
  popupOpened.classList.toggle("popup_opened");
  if (popupOpened.classList.contains("popup_opened")) {
    nameInput.value = profileAuthor.textContent;
    jobInput.value = profileDescription.textContent;
  }
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  togglePopupProfile();
}

popupProfile.addEventListener("click", togglePopupProfile);
buttonCloseProfile.addEventListener("click", togglePopupProfile);
popupProfileForm.addEventListener("submit", handleFormSubmit);

popupCardForm.addEventListener("submit", addNewCard);

addButton.addEventListener("click", addpopupButton);
buttonCloseCard.addEventListener("click", closepopupButton);

PopupImageCloseButton.addEventListener("click", closePopupImage);
