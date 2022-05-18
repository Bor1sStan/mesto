
//переменные для попапа профиля

export const profileName = document.querySelector("#profile-name"); //переменная имени профиля
export const profileJob = document.querySelector("#profile-job"); //переменная работы профиля

export const nameInput = document.querySelector("#name-input"); //переменная импута имени профиля
export const jobInput = document.querySelector("#job-input"); //переменная импута работы профиля

export const addButton = document.querySelector("#add-button"); //переменная кнопки редактирования профиля
export const editButton = document.querySelector("#edit-button"); //переменная кнопки открытия попапа для добавления новой карточки

export const profileForm = document.querySelector("#profileForm"); //переменная формы профиля
export const placeForm = document.querySelector("#placeForm"); //переменная формы места


//переменная для параметров функции FormValidator
export const parametersFormValidator = {
  inputSelector: ".form__input",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_error-type",
  errorClass: "form__error_visible",
  submitButtonSelector: ".form__save-button"
};