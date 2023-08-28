const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__save",
  inactiveButtonClass: "popup__save_type_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const riodeJaneiro = new URL("https://images.unsplash.com/photo-1516834611397-8d633eaec5d0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80", import.meta.url);
const barcelona = new URL("https://images.unsplash.com/photo-1598122189806-f3ae429d5232?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80", import.meta.url);
const hawai = new URL("https://plus.unsplash.com/premium_photo-1667771850963-82071c136728?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80", import.meta.url);
const madagascar = new URL("https://images.unsplash.com/photo-1564198729838-cb82ee0c733c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80", import.meta.url);
const moscow = new URL("https://images.unsplash.com/photo-1495542779398-9fec7dc7986c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80", import.meta.url);
const horse = new URL("https://images.unsplash.com/photo-1573751055635-a0ad5937fd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80", import.meta.url);

const initialCards = [
  {
    name: "Рио Де Жанейро",
    link: riodeJaneiro,
  },
  {
    name: "Барселона",
    link: barcelona,
  },
  {
    name: "Гаваи",
    link: hawai,
  },
  {
    name: "Мадагаскар",
    link: madagascar,
  },
  {
    name: "Москва",
    link: moscow,
  },
  {
    name: "Лошадь",
    link: horse,
  },
];

export  { initialCards,  validationConfig }