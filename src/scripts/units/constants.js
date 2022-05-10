// export const popupCardImage = document.querySelector("#popup-card");  //переменная попапа изображения места

//переменная для списка попапов
export const cardTemplate = document.querySelectorAll("#card");  //переменная попапов

//переменные для попапа профиля

export const profileName = document.querySelector(".profile__name"); //переменная имени профиля
export const profileJob = document.querySelector(".profile__job"); //переменная работы профиля
export const nameInput = document.querySelector("#name"); //переменная импута имени профиля
export const jobInput = document.querySelector("#job"); //переменная импута работы профиля
export const profileForm = document.querySelector("#profileForm"); //переменная формы профиля

//переменные для попапа места
export const popupPlace = document.querySelector("#popup-place"); //переменная попапа места
export const placeNameInput = document.querySelector("#place"); //переменная импута имени места
export const placeWebsiteInput = document.querySelector("#website"); //переменная импута ссылки места
export const placeForm = document.querySelector("#placeForm"); //переменная формы места

//переменные кнопок для попапа профиля
export const buttonEdit = document.querySelector(".profile__edit-button"); //переменная кнопки редактирования профиля
export const buttonAdd = document.querySelector(".profile__add-button"); //переменная кнопки добавления новой карточки

//переменная для контейнера списка карточек
export const cardsContainer = document.querySelector(".elements"); //переменная секции карточек

//переменная для основного массива карточек
export const cardsArray = {}; //переменная массива

//переменная для параметров функции FormValidator
export const parametersFormValidator = {
  inputSelector: ".form__input",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_error-type",
  errorClass: "form__error_visible",
  submitButtonSelector: ".form__save-button"
};