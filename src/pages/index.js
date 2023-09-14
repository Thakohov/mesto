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

let userId;

function deleteConfirmOpen(id) {
  popupConfirm.open(id);
}

// function handleCardDelete(id) {
//   api.deleteCard(id)
//   .then(() => {
//   })
// }

const popupConfirm = new PopupWithConfirmation(confirmPopup);
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


Promise.all([api.getInitialCards(), api.getUserInfo()])
.then(([items, user]) => {
    userId = user._id;
    cardList.renderer(items);
    profileFormEdit.getUserInfo(user);
    profileAuthor.textContent = user.name;
    profileDescription.textContent = user.about;
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
  .then((data) => {
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


const generateCard = (item) => {
  const card = new Card(item,".card-template_type_default", handleCardClick, deleteConfirmOpen, popupConfirm.formSubmitCallback((id) => {
    api.deleteCard(id)
    .then(() => {
      card.delete();
      console.log(card.delete());
    })
    .catch(err => {
      console.log(err);
    })
  }), userId)
  const cardElement = card.generateCard();

  return cardElement;
};
