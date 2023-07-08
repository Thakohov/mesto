const popup = document.querySelector(".profile__edit");
const popupOpened = document.querySelector(".popup_type_profile");
const buttonClose = popupOpened.querySelector(".popup__close");


let formElement = document.querySelector(".popup__form");
let nameInput = document.querySelector(".popup__input_type_name");
let jobInput = document.querySelector(".popup__input_type_job");


let profileAuthor = document.querySelector(".profile__author");
let profileDescription = document.querySelector(".profile__description");

function togglePopup() {
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
  togglePopup();
}

popup.addEventListener("click", togglePopup);
buttonClose.addEventListener("click", togglePopup);

formElement.addEventListener("submit", handleFormSubmit);

