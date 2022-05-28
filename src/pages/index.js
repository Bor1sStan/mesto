import "./index.css"; //это css подключаем в js

// В этом файлы должны быть прописаны функции, создание новых классов, попапов и форм валидации. Все переменные прописаны в units|constants.

import Card from "../scripts/components/Card";
import Popup from "../scripts/components/Popup";
import FormValidator from "../scripts/components/FormValidator";
import PopupWithForm from "../scripts/components/PopupWithForm";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithConfirmation from "../scripts/components/PopupWithConfirmation";
import Section from "../scripts/components/Section";
import UserInfo from "../scripts/components/UserInfo";
import Api from "../scripts/components/Api";

import {
  addButton,
  editButton,
  avatarButton,
  parametersFormValidator,
} from "../scripts/units/constants";
// import { find } from "core-js/core/array";

let userID = "";  // переменная под айди пользователя

let cardOwnerId = "";  // переменная под айди пользователя карточки

//     -------------------------------------------

//     мой личный токен авторизации  authorization: "5ac24e56-6009-4399-abe6-aadfc281115b"

//     номер когорты = "cohort-41"

//     мой id = "a97c5a8fdf6401cef9281092"

//     -------------------------------------------

//-------------------------- Api

//данные пользователя
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "5ac24e56-6009-4399-abe6-aadfc281115b",
  },
});

//-------------------------- UserInfo

//данные пользователя
const profile = new UserInfo({
  nameSelector: "#name",
  aboutSelector: "#about",
  avatarSelector: "#avatar",
  id: "a97c5a8fdf6401cef9281092",
});

//-------------------------- Section

const cardSection = new Section((cardItem) => {
  cardSection.addItem(createCard(cardItem, userID))}, ".elements");

// //-------------------------- Card

function createCard(cardData, currentUser) {
  const card = new Card(
    cardData,
    currentUser,
    "#card",
    () => photoPopup.open({ name: cardData.name, link: cardData.link }),
    (card) => deletePopup.open(card),
    (card) => {
      if (!card.checkLike()) {
        api
          .likeCard(cardData._id)
          .then((likeArrayResponse) => (card.likes = likeArrayResponse.likes))
          .then(() => card.setLike())
          .catch((err) => console.log(err));
      } else {
        api
          .removeLike(cardData._id)
          .then((likeArrayResponse) => (card.likes = likeArrayResponse.likes))
          .then(() => card.removeLike())
          .catch((err) => console.log(err));
      }
    }
  );
  return card.generateCard();
}

//-------------------------- Popup Image

const photoPopup = new PopupWithImage("#popup-card");
photoPopup.setEventListeners();

// //-------------------------- Popup Delete

const deletePopup = new PopupWithConfirmation({
  popupSelector: "#popup-agreement",
  submitCallback: () => {
    api
      .deleteCard(deletePopup.card._id)
      .then(() => deletePopup.card.deleteCard())
      .then(() => deletePopup.close())
      .catch((err) => console.log(err));
  },
});
deletePopup.setEventListeners();

//-------------------------- Popup Form Profile

const profilePopup = new PopupWithForm({
  popupSelector: "#popup-profile",
  submitCallback: (userData) => {
    profilePopup.setPending();
    api
      .changeUserInfo(userData)
      .then((userData) => {
        profile.setUserInfo(userData);
        profilePopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => profilePopup.removePending("Сохранить"));
  },
});
profilePopup.setEventListeners();

editButton.addEventListener("click", () => {
  
  profilePopup.setInputValues(profile.getInfo(profile.name, profile.about));

  profileFormValidator.resetValidation();
  profileFormValidator.toggleButtonState();
  profilePopup.open();
});

// //-------------------------- Popup Form Avatar

const avatarPopup = new PopupWithForm({
  popupSelector: "#popup-avatar",
  submitCallback: (link) => {
    avatarPopup.setPending();
    api
      .changeAvatar({ avatar: link.avatar })
      .then(() => {
        profile.setAvatar({ avatar: link.avatar });

        avatarPopup.close();
      })
      .catch((err) => console.log(err))
      .finally(() => avatarPopup.removePending("Сохранить"));
  },
});
avatarPopup.setEventListeners();

avatarButton.addEventListener("click", () => {
  
  avatarFormValidator.resetValidation();
  avatarFormValidator.toggleButtonState();

  avatarPopup.open();
});

// //-------------------------- Popup Form Place

// //попап формы места
const popupPlace = new PopupWithForm({
  popupSelector: "#popup-place",
  submitCallback: (cardData) => {
    popupPlace.setPending();
    api
      .addCard(cardData)
      .then((responseWithCard) => {
        cardSection.addItem(
          createCard(responseWithCard, cardOwnerId)
        );
        popupPlace.close();
      })
      .catch((err) => console.log(err))
      .finally(() => popupPlace.removePending("Создать"));
  },
});
popupPlace.setEventListeners();
addButton.addEventListener("click", () => {
  placeFormValidator.resetValidation();
  placeFormValidator.toggleButtonState();
  popupPlace.open();
});

// //-------------------------- Form Validators

const placeFormValidator = new FormValidator(
  parametersFormValidator,
  "#place-form"
);
placeFormValidator.enableValidation();

const profileFormValidator = new FormValidator(
  parametersFormValidator,
  "#profile-form"
);
profileFormValidator.enableValidation();

const avatarFormValidator = new FormValidator(
  parametersFormValidator,
  "#avatar-form"
);
avatarFormValidator.enableValidation();

// //-------------------------- Promise.all

Promise.all([api.getUserInfo(), api.getCardList()])
  .then((promiseResponseArray) => {

    cardOwnerId = promiseResponseArray[0]._id;

    profile.setAvatar(promiseResponseArray[0]);

    profile.setUserInfo(promiseResponseArray[0]);

    userID = profile.getId(promiseResponseArray[0]._id);

    cardSection.renderItems(promiseResponseArray[1].reverse());
  })
  .catch((err) => console.log(err));
