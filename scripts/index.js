import Card from "./Card.js";
import initialCards from "./initial-сards.js";
import { FormValidator, validationConfig as config } from "./FormValidator.js";

const profileEditButton = document.querySelector(".profile__edit");
const popupOpenedProfile = document.querySelector(".popup_type_profile");
const buttonCloseProfile = popupOpenedProfile.querySelector(".popup__close");

const popup = Array.from(document.querySelectorAll(".popup"));

const popupProfileForm = document.querySelector(".popup__form_type_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

const profileAuthor = document.querySelector(".profile__author");
const profileDescription = document.querySelector(".profile__description");

const popupAddCard = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".profile__button");
const buttonCloseCard = popupAddCard.querySelector(".popup__close");
const popupCardForm = document.querySelector(".popup__form_type_card");

const popupTypeImage = document.querySelector(".popup_type_image");
const popupImage = popupTypeImage.querySelector(".popup__image");
const popupCaption = popupTypeImage.querySelector(".popup__caption");
const popupImageCloseButton = popupTypeImage.querySelector(".popup__close");

const inputPlace = popupCardForm.querySelector(".popup__input_type_place");
const inputSrc = popupCardForm.querySelector(".popup__input_type_src");

const buttonsaveCard = document.querySelector(".popup__save_type_card");
const cardsList = document.querySelector(".cards__list");

const cardFormValidation = new FormValidator(config, ".popup_type_add-card");
const profileFormValidation = new FormValidator(config, ".popup__form_type_profile");

cardFormValidation.enableValidation();
profileFormValidation.enableValidation();

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
}

function openPopupImage(link, name) {
  popupImage.src = link;
  popupImage.alt = name;
  popupCaption.textContent = name;
  openPopup(popupTypeImage);
}

function submitEditProfileForm(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupOpenedProfile);
}

profileEditButton.addEventListener("click", () => {
  openPopup(popupOpenedProfile);
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileDescription.textContent;
  profileFormValidation._resetValidation();
});

buttonCloseProfile.addEventListener("click", () => {
  closePopup(popupOpenedProfile);
});

popupProfileForm.addEventListener("submit", submitEditProfileForm);

addButton.addEventListener("click", () => {
  openPopup(popupAddCard);
  popupCardForm.reset();
  cardFormValidation._resetValidation();
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

const addNewCard = () => {
  const card = new Card({ name: inputPlace.value, link: inputSrc.value }, ".card-template_type_default");
  const cardElement = card.generateCard();
  cardsList.prepend(cardElement);
  closePopup(popupAddCard);
};

initialCards.forEach((item) => {
  const card = new Card(item, ".card-template_type_default", openPopupImage);
  const cardElement = card.generateCard({
    name: item.name,
    link: item.link,
  });
  cardsList.append(cardElement);
});

buttonsaveCard.addEventListener("click", (evt) => {
  evt.preventDefault();
  addNewCard();
});
