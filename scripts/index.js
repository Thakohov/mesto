const popup = document.querySelector(".profile__edit");
const popupOpened = document.querySelector(".popup_type_profile");
const buttonClose = popupOpened.querySelector(".popup__close");


let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");

let profileAuthor = document.querySelector(".profile__author");
let profileDescription = document.querySelector(".profile__description");

const addButton = document.querySelector(".profile__add-button");
const popupOpen =  document.querySelector(".popup_type_add-card");
const ButtonClosed = popupOpen.querySelector(".popup__close");



const placeInput = document.querySelector('.popup__input_type_place');
const srcInput = document.querySelector('.popup__input_type_src');

function togglePopup() {
  popupOpened.classList.toggle("popup_opened");
  if (popupOpened.classList.contains("popup_opened")) {
    nameInput.value = profileAuthor.textContent;
    jobInput.value = profileDescription.textContent;
  }
}

function openPopup() {
  popupOpen.classList.add("popup_opened");
}

function closePopup() {
  popupOpen.classList.remove("popup_opened");
}


function handleFormSubmit(evt) {
  evt.preventDefault();
  profileAuthor.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  togglePopup();
  closePopup();
}


popup.addEventListener("click", togglePopup);
buttonClose.addEventListener("click", togglePopup);

formElement.addEventListener("submit", handleFormSubmit);

addButton.addEventListener("click", openPopup);
ButtonClosed.addEventListener("click", closePopup);
