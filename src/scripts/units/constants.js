
//переменные для попапа профиля

export const addButton = document.querySelector("#add-button"); //переменная кнопки редактирования профиля
export const editButton = document.querySelector("#edit-button"); //переменная кнопки открытия попапа для добавления новой карточки
export const avatarButton = document.querySelector(".profile__avatar-edit-button"); //переменная кнопки открытия попапа аватара

//переменная для параметров функции FormValidator
export const parametersFormValidator = {
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_error-type",
  errorClass: "form__error_visible",
};