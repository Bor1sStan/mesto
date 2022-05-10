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
  placeForm,
  profileForm,
  popupCardImage,
  cardTemplate,
  buttonEdit,
  buttonAdd,
} from "../scripts/units/constants";

import { initialCards } from "../scripts/units/initialCards";

//данные пользователя
const profile = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__job",
});

const initialCardList = new Section(
  {
    data: initialCards,
    renderer: renderCard,
  },
  ".elements"
);
initialCardList.renderItems();

//попап картинки
const popupImage = new PopupWithImage("#popup-card");
popupImage.setEventListeners();

//функция подбора карточки
function renderCard(cardData) {
  const card = new Card(
    { name: cardData.name, link: cardData.link },
    "#card",
    () => {
      //функция открытия карточки попапа при клике
      popupImage.open({ name: cardData.name, link: cardData.link });
    }
  );

  return card.generateCard();
}

//попап формы профиля s
const profilePopup = new PopupWithForm({
  popupSelector: "#popup-profile",
  handleFormSubmit: (data) => {
    //это колбэк сабмита формы
    initialCardList.addItem(renderCard(data));
    // profilePopup.close();
  },
  buttonOpen: ".profile__edit-button",
});
profilePopup.setEventListeners();

//попап формы места
const placePopup = new PopupWithForm({
  popupSelector: "#popup-place",
  handleFormSubmit: (data) => {
    //это колбэк сабмита формы
    initialCardList.addItem(renderCard(data));
    // placePopup.close();
  },
  buttonOpen: ".profile__add-button",
});
placePopup.setEventListeners();

//валидация попапа формы места
const placeFormValidator = new FormValidator(
  parametersFormValidator,
  placeForm
);
placeFormValidator.enableValidation(); //функция валидации формы места

//валидация попапа формы профиля
const profileFormValidator = new FormValidator(
  parametersFormValidator,
  profileForm
);
profileFormValidator.enableValidation(); //функция валидации формы профиля
