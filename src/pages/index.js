import Card from "../components/Card.js";

import { validationConfig as config } from "../utils/constants.js";

import { FormValidator } from "../components/FormValidator.js";

import Section from "../components/Section.js";

import PopupWithImage from "../components/PopupWithImage.js";

import PopupWithForm from "../components/PopupWithForm.js";

import UserInfo from "../components/UserInfo.js";

import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

import "./index.css";
import { data } from "autoprefixer";

import api from "../components/Api.js";

const profileEditButton = document.querySelector(".profile__edit");
const popupOpenedProfile = document.querySelector(".popup_type_profile");

const confirmPopup = document.querySelector('.popup_type_confirm')

const nameInput = document.querySelector(".popup__input_type_name");
const jobInput = document.querySelector(".popup__input_type_job");

const profileAuthor = document.querySelector(".profile__author");
const profileDescription = document.querySelector(".profile__description");

const popupAddCard = document.querySelector(".popup_type_add-card");
const addButton = document.querySelector(".profile__button");

const popupTypeImage = document.querySelector(".popup_type_image");

const cardsList = document.querySelector(".cards__list");

function deleteConfirmOpen() {
  popupConfirm.open();
}

function handleCardDelete(id) {
  api.deleteCard(id)
  .then((res) => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  })
}

const popupConfirm = new PopupWithConfirmation(confirmPopup, handleCardDelete);
popupConfirm.setEventListeners();



const cardList = new Section(
  {
    renderer: (data) => {
      const cardElement = generateCard(data);
      cardList.addItem(cardElement);
    },
  },
  cardsList
);

api.getInitialCards()
.then(data => {
  data.forEach(card => {
    const cardElement = generateCard(card);
    cardList.addItem(cardElement);
  })
})
.catch(error => {
  console.log(error);
})


const cardFormValidation = new FormValidator(config, ".popup_type_add-card");
const profileFormValidation = new FormValidator(config, ".popup__form_type_profile");

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
  api.createCard(data)
  .then(card => {
    console.log(card);
    const cardElement = generateCard(data);
    cardList.addItemPrep(cardElement);
  })
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
  api.setUserInfo(data)
  .then(res => {
    profileAuthor.textContent = res.name;
    profileDescription.textContent = res.about;
  })
  .catch(res => {
    console.log(res);
  })

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

api.getUserInfo()
.then(res => {
  profileAuthor.textContent = res.name;
  profileDescription.textContent = res.about
})
.catch(error => {
  console.log(error);
})

const generateCard = (item) => {
  const card = new Card(item, ".card-template_type_default", handleCardClick, deleteConfirmOpen, handleCardDelete)
  const cardElement = card.generateCard();

  return cardElement;
};
