const profileEditButton = document.querySelector(".profile__edit");
const popupOpenedProfile = document.querySelector(".popup_type_profile");
const buttonCloseProfile = popupOpenedProfile.querySelector(".popup__close");

const popup = Array.from(document.querySelectorAll(".popup"));

const popupProfileForm = document.querySelector(".popup__form_type_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const spanName = document.querySelector(".name-error");
const jobInput = document.querySelector(".popup__input_type_job");
const spanJob = document.querySelector(".job-error");

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
const popupImageCloseButton = popupTypeImage.querySelector(".popup__close");

const inputPlace = popupCardForm.querySelector(".popup__input_type_place");
const spanPlace = document.querySelector(".place-error");
const inputSrc = popupCardForm.querySelector(".popup__input_type_src");
const spanSrc = document.querySelector(".src-error");

const buttonsaveProfile = document.querySelector(".popup__save_type_profile");
const buttonsaveCard = document.querySelector(".popup__save_type_card");


function closePopupEsc (popup) {
  document.addEventListener("keydown", (evt) => {
    if (evt.key === "Escape" && popup.classList.contains('popup_opened')) {
      closePopup(popup);
      document.removeEventListener("keydown", closePopupEsc(popup))
    }
  });
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  closePopupEsc(popup)
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
}

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
    openPopup(popupTypeImage);
    popupImage.src = initialCards.link;
    popupImage.alt = initialCards.name;
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

const addNewCard = (evt) => {
  evt.preventDefault();
  const newCard = createCard({ name: inputPlace.value, link: inputSrc.value });
  cardsList.prepend(newCard);
  closePopup(popupAddCard);
  buttonsaveCard.disabled = true
  buttonsaveCard.classList.add('popup__save_type_disabled')
};

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupOpenedProfile);
  buttonsaveProfile.disabled = true
  buttonsaveProfile.classList.add('popup__save_type_disabled')
}

profileEditButton.addEventListener("click", () => {
  hideInputError(popupOpenedProfile, nameInput);
  hideInputError(popupOpenedProfile, jobInput);
  openPopup(popupOpenedProfile);
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileDescription.textContent;
});

buttonCloseProfile.addEventListener("click", () => {
  closePopup(popupOpenedProfile);
  buttonsaveProfile.disabled = true
  buttonsaveProfile.classList.add('popup__save_type_disabled')
});

popupProfileForm.addEventListener("submit", submitEditProfileForm);

popupCardForm.addEventListener("submit", addNewCard);

addButton.addEventListener("click", () => {
  hideInputError(popupAddCard, inputPlace);
  hideInputError(popupAddCard, inputSrc);
  openPopup(popupAddCard);
  popupCardForm.reset();
});

buttonCloseCard.addEventListener("click", () => {
  closePopup(popupAddCard);
});

popupImageCloseButton.addEventListener("click", () => {
  closePopup(popupTypeImage);
});

popup.forEach((item) => {
  item.addEventListener("click", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(item);
    }
  });
});

enableValidation(validationConfig);
