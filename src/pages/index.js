import Card from "../components/Card.js";
import { initialCards, validationConfig as config } from "../utils/constants.js";
import { FormValidator } from "../components/FormValidator.js";

import Section from "../components/Section.js";

import Popup from "../components/Popup.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import UserInfo from "../components/UserInfo.js";

import "./index.css";
import { data } from "autoprefixer";

const profileEditButton = document.querySelector(".profile__edit");
const popupOpenedProfile = document.querySelector(".popup_type_profile");

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

const profileAuthor = document.querySelector(".profile__author");
const profileDescription = document.querySelector(".profile__description");

const popupAddCard = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".profile__button");

const popupTypeImage = document.querySelector(".popup_type_image");

const cardsList = document.querySelector(".cards__list");

const cardList = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      const cardElement = generateCard(data);

      cardList.addItem(cardElement);
    },
  },
  cardsList
);

const cardFormValidation = new FormValidator(config, ".popup_type_add-card");
const profileFormValidation = new FormValidator(
  config,
  ".popup__form_type_profile"
);
cardFormValidation.enableValidation();
profileFormValidation.enableValidation();

const imagePopup = new PopupWithImage(popupTypeImage);
imagePopup.setEventListeners();

function handleCardClick(name, link) {
  imagePopup.open(name, link);
}

const popupCardAdd = new PopupWithForm(popupAddCard, handleSubmitFormCard);
popupCardAdd.setEventListeners();

function handleSubmitFormCard(data) {
  const cardElement = generateCard(data);
  cardList.addItemPrep(cardElement);
  popupCardAdd.close();
}

const popupProfileForm = new PopupWithForm(
  popupOpenedProfile,
  handleSubmitFormProfile
);
popupProfileForm.setEventListeners();

const profileFormEdit = new UserInfo({
  userName: profileAuthor,
  userJob: profileDescription,
});

function handleSubmitFormProfile(data) {
  profileFormEdit.setUserInfo(data);
  popupProfileForm.close();
}

addButton.addEventListener("click", () => {
  popupCardAdd.open();
  cardFormValidation.resetValidation();
});

profileEditButton.addEventListener("click", () => {
  popupProfileForm.open();
  const profileFormValues = profileFormEdit.getUserInfo();
  nameInput.value = profileFormValues.name;
  jobInput.value = profileFormValues.job;
  profileFormValidation.resetValidation();
});

const generateCard = (item) => {
  const card = new Card(item, ".card-template_type_default", handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};

cardList.renderer();
