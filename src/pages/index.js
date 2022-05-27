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
});

const userId = profile.getInfo().id; // переменная для id

// const userInfo = api.getUserInfo()
//                     .then((res) => profile.getInfo( {name: res.name, about: res.about, avatar: res.avatar, id: res.id}))
//                     .catch((err) => console.log(err));
// console.log(userInfo)








Promise.all([api.getUserInfo(), api.getCardList()])
  .then((promiseResponseArray) => {
    profile.setAvatar(promiseResponseArray[0]);

    profile.setUserInfo(promiseResponseArray[0]);

    cardSection.renderItems(promiseResponseArray[1].reverse());
    console.log(promiseResponseArray[0])
  })
  .catch((err) => console.log(err));
  

// const name = profile.getInfo()
// console.log(profile.getInfo())

// {name: res.name, about: res.about, avatar: res.avatar, id: res.id}



  fetch("https://mesto.nomoreparties.co/v1/cohort-41/users/me", {
    method: "GET",
    headers: {
      authorization: "5ac24e56-6009-4399-abe6-aadfc281115b",
      // "Content-Type": "application/json",
    },
    }).then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject("Ошибка" + res.status);
    })
    .then((res) => (console.log(res)))
    .then((data) => ({

    }))
    .catch((err) => console.log(err));






// , const bebe = new Promise.getInfobyGet()


// const userInfo = api.getUserInfo()
//                     .then((userData) => profile.setUserInfo(userData))
//                     .catch((err) => console.log(err));
// console.log(userInfo)

// console.log(profile.getInfo().name)




//-------------------------- Section

const cardSection = new Section((cardItem) => {
  cardSection.addItem(createCard(cardItem, userId));
}, ".elements");

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

// editButton.addEventListener("click", () => {
//   api.getUserInfo().then((data) => {
//     profilePopup.setInputValues(data);
//   });
//   profileFormValidator.resetValidation();
//   profileFormValidator.toggleButtonState();
//   profilePopup.open();
// });




editButton.addEventListener("click", () => {
  profilePopup.setInputValues(profile.getInfo().name)


  console.log(profile.getInfo())
  
  profileFormValidator.resetValidation();
  profileFormValidator.toggleButtonState();
  profilePopup.open();
});



// editButton.addEventListener("click", () => {
  
//   console.log(name)

//   profilePopup.setInputValues(profile.getInfo())

//   // {name: data.name, about: data.about}

//   profileFormValidator.resetValidation();
//   profileFormValidator.toggleButtonState();
//   profilePopup.open();
// });


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
  api.getUserInfo()
    .then((data) => {
    avatarPopup.setInputValues(data)})
    .catch((err) => console.log(err));
  
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
          createCard(responseWithCard, responseWithCard.owner._id)
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

