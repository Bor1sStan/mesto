import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const initialCards = [
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
];

//переменные для попап карточек
export const popupCard = document.querySelector("#popup-card"); //переменная попапа карточки
export const popupImage = document.querySelector(".popup__image"); //переменная картинки места для попапа
export const popupName = document.querySelector(".popup__row"); //переменная имени места картинки для попапа

//переменная для списка попапов
const popupList = document.querySelectorAll(".popup"); //переменная попапов

//переменные для попапа профиля
export const popupProfile = document.querySelector("#popup-profile"); //переменная попапа профиля
export const profileName = document.querySelector(".profile__name"); //переменная имени профиля
export const profileJob = document.querySelector(".profile__job"); //переменная работы профиля
export const nameInput = document.querySelector("#name"); //переменная импута имени профиля
export const jobInput = document.querySelector("#job"); //переменная импута работы профиля
export const profileForm = document.querySelector("#profileForm"); //переменная формы профиля

//переменные для попапа места
export const popupPlace = document.querySelector("#popup-place"); //переменная попапа места
const placeNameInput = document.querySelector("#place"); //переменная импута имени места
const placeWebsiteInput = document.querySelector("#website"); //переменная импута ссылки места
export const placeForm = document.querySelector("#placeForm"); //переменная формы места

//переменные кнопок для попапа профиля
export const buttonEdit = document.querySelector(".profile__edit-button"); //переменная кнопки редактирования профиля
export const buttonAdd = document.querySelector(".profile__add-button"); //переменная кнопки добавления новой карточки

//переменная для контейнера списка карточек
const cardsContainer = document.querySelector(".elements"); //переменная секции карточек

//переменная для основного массива карточек
const cards = {}; //переменная массива


//валидация попапа места
const placeFormValidator = new FormValidator({
  inputSelector: ".form__input",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_error-type",
  errorClass: "form__error_visible",
  submitButtonSelector: ".form__save-button"
}, placeForm);


//валидация попапа профиля
const profileFormValidator = new FormValidator({
  inputSelector: ".form__input",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_error-type",
  errorClass: "form__error_visible",
  submitButtonSelector: ".form__save-button"
}, profileForm);


//функция открытия попапов
export function openPopup(item) {
  item.classList.add("popup_opened");
  document.addEventListener("keydown", escButtonHandler);
}

//функция закрытия попапов
function closePopup(item) {
  item.classList.remove("popup_opened");
  document.removeEventListener("keydown", escButtonHandler);
}

//функция добавления новой созданной карточки в основной массив
function addCard(card) {
  cardsContainer.prepend(createCard(card));
}

//функция создания карточки из класса Card
function createCard(cards) {
  const card = new Card(cards, "#card");
  const newCardElement = card.generateCard();

  return newCardElement;
}

//функция открытия попапа места
buttonAdd.addEventListener("click", () => {
  placeNameInput.value = "";
  placeWebsiteInput.value = "";

  placeFormValidator.enableValidation();
  openPopup(popupPlace);
});

//функция отправки данных попапа места для создания карточки основного массива
function handleCreateNewPlace(evt) {
  evt.preventDefault();
  cards.name = placeNameInput.value;
  cards.link = placeWebsiteInput.value;

  addCard(cards);
  closePopup(popupPlace);
}

//функция закрытия попапа на оверлей и кнопки на крестик
popupList.forEach((item) => {
  item.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opened")) {
      closePopup(item);
    }
    if (evt.target.classList.contains("popup__close-button")) {
      closePopup(item);
    }
  });
});

//функция закрытия попапа на кнопку Escape
const escButtonHandler = (evt) => {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector(".popup_opened"); //переменная открытых попапов
    closePopup(popupOpened);
  }
};

//функция сохранения данных профиля
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}

//слушатель событий на открытие попапа профиля
buttonEdit.addEventListener("click", () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  
  profileFormValidator.enableValidation();
  openPopup(popupProfile);
});

//слушатель событий на сохранение данных профиля ил попапа профиля
profileForm.addEventListener("submit", handleProfileFormSubmit);

//обработчик события отправки данных формы места
placeForm.addEventListener("submit", handleCreateNewPlace);

//перебираем начальный массив
initialCards.forEach((data) => {
  const card = new Card(data, "#card");

  const cardElement = card.generateCard();

  cardsContainer.prepend(cardElement);
});