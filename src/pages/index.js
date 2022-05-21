import "./index.css"; //это css подключаем в js

// В этом файлы должны быть прописаны функции, создание новых классов, попапов и форм валидации. Все переменные прописаны в units|constants.

import Card from "../scripts/components/Card";
import FormValidator from "../scripts/components/FormValidator";
import PopupWithForm from "../scripts/components/PopupWithForm";
import PopupWithImage from "../scripts/components/PopupWithImage";
import Section from "../scripts/components/Section";
import UserInfo from "../scripts/components/UserInfo";

import {
  parametersFormValidator,
  profileName,
  profileJob,
  addButton,
  editButton,
  profileForm,
  placeForm,
} from "../scripts/units/constants";

import { initialCards } from "../scripts/units/initialCards";
import Popup from "../scripts/components/Popup";

//-------------------------- UserInfo

//данные пользователя
export const profile = new UserInfo({
  nameSelector: "#profile-name",
  jobSelector: "#profile-job",
});

//-------------------------- Section

const initialCardList = new Section(
  {
    data: initialCards,
    renderer: renderCard,
  },
  ".elements"
);
initialCardList.renderItems();

//-------------------------- Popup Image

//попап картинки
const popupImage = new PopupWithImage("#popup-card");
popupImage.setEventListeners();

//-------------------------- Card

//функция подбора карточки
function renderCard(cardData) {
  const card = new Card(
    { place: cardData.place, link: cardData.link },
    "#card",
    () => {
      //функция открытия карточки попапа при клике
      popupImage.open({ place: cardData.place, link: cardData.link });
    }
  );

  return card.generateCard();
}

//-------------------------- Popup Form Profile

//попап формы профиля
export const profilePopup = new PopupWithForm({
  popupSelector: "#popup-profile",
  handleFormSubmit: (userData) => {
    //это колбэк сабмита формы, обновление данных профиля

    profile.setUserInfo(userData);

    profilePopup.close();
  },
});
profilePopup.setEventListeners();

//-------------------------- Popup Form Place

//попап формы места
export const placePopup = new PopupWithForm({
  popupSelector: "#popup-place",
  handleFormSubmit: (data) => {
    //это колбэк сабмита формы, создание и добавление карточки
    initialCardList.addItem(data);
    placePopup.close();
  },
});
placePopup.setEventListeners();

//-------------------------- Form Validator Profile

//валидация попапа формы профиля

const profileFormValidator = new FormValidator(
  parametersFormValidator,
  profileForm
);

profileFormValidator.enableValidation(); //функция валидации формы профиля

editButton.addEventListener("click", () => {
  profilePopup.setInputValues(profile.getUserInfo());

  profileFormValidator.toggleButtonState();
  profileFormValidator.resetValidation();

  profilePopup.open();
});

//-------------------------- Form Validator Place

const placeFormValidator = new FormValidator(
  parametersFormValidator,
  placeForm
);

placeFormValidator.enableValidation(); //функция валидации формы места

addButton.addEventListener("click", () => {
  placeFormValidator.toggleButtonState();
  placeFormValidator.resetValidation();

  placePopup.open();
});

//---------------------------------------------------------------------NBEGIN------------------------------

const avatarPopup = new PopupWithForm({
  popupSelector: "#popup-avatar",
  handleFormSubmit: (userData) => {
    //  тут надо вставить ссылку на аватар

    avatarPopup.close();
  },
});
avatarPopup.setEventListeners()



const editAvatar = document.querySelector(".profile__avatar-edit-button");

editAvatar.addEventListener("click", () => {
  avatarPopup.open();
})