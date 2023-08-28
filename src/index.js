import Card from "./components/Card.js";
import { initialCards, validationConfig as config } from "./utils/constants.js";
import { FormValidator } from "./components/FormValidator.js";

import Section from "./components/Section.js";

import Popup from "./components/Popup.js";

import PopupWithImage from "./components/PopupWithImage.js";

import PopupWithForm from "./components/PopupWithForm.js";

import UserInfo from "./components/UserInfo.js";

import './pages/index.css';
import { data } from "autoprefixer";

const profileEditButton = document.querySelector(".profile__edit");
const popupOpenedProfile = document.querySelector(".popup_type_profile");

const popupProfileForm = document.querySelector(".popup__form_type_profile");
const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

const profileAuthor = document.querySelector(".profile__author");
const profileDescription = document.querySelector(".profile__description");

const popupAddCard = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".profile__button");
const popupCardForm = document.querySelector(".popup__form_type_card");

const popupTypeImage = document.querySelector(".popup_type_image");

const inputPlace = popupCardForm.querySelector(".popup__input_type_place");
const inputSrc = popupCardForm.querySelector(".popup__input_type_src");

const buttonsaveCard = document.querySelector(".popup__save_type_card");
const cardsList = document.querySelector(".cards__list");

const cardFormValidation = new FormValidator(config, ".popup_type_add-card");
const profileFormValidation = new FormValidator(config, ".popup__form_type_profile");

const imagePopup = new PopupWithImage(popupTypeImage);
imagePopup.setEventListeners();

const popupProfile = new Popup(popupOpenedProfile);
const popupCard = new Popup(popupAddCard);
popupProfile.setEventListeners();
popupCard.setEventListeners();


const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    const card = new Card(item, ".card-template_type_default", handleCardClick);
    const cardElement = card.generateCard();

    cardList.addItem(cardElement)
  },
},
cardsList);

cardList.renderer();

cardFormValidation.enableValidation();
profileFormValidation.enableValidation();

function handleCardClick(name, link) {
  imagePopup.open(name, link);
}

const popupCardAdd = new PopupWithForm(popupAddCard, handleSubmitFormCard);
popupCardAdd.setEventListeners();

function handleSubmitFormCard(data) {
  const card = new Card(data);
  cardList = card.addItem(card);
  popupCardAdd.close();
}

profileEditButton.addEventListener("click", () => {
  popupProfile.open();
  nameInput.value = profileAuthor.textContent;
  jobInput.value = profileDescription.textContent;
  profileFormValidation.resetValidation();
});

// popupProfileForm.addEventListener("submit", handleSubmitForm);

addButton.addEventListener("click", () => {
  popupCardAdd.open();
  popupCardForm.reset();
  cardFormValidation.resetValidation();
});

const generateCard = (item) => {
  const card = new Card(item, ".card-template_type_default", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

// const addNewCard = () => {
//   const cardElement = generateCard({
//     name: inputPlace.value,
//     link: inputSrc.value,
//   });
//   cardsList.prepend(cardElement);
//   popupCard.close()
// };

// buttonsaveCard.addEventListener("click", (evt) => {
//   evt.preventDefault();
//   addNewCard();

// });

