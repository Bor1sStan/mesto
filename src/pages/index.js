import "./index.css"; //это css подключаем в js

// В этом файлы должны быть прописаны функции, создание новых классов, попапов и форм валидации. Все переменные прописаны в units|constants.

import Card from "../scripts/components/Card";
import FormValidator from "../scripts/components/FormValidator";
import PopupWithForm from "../scripts/components/PopupWithForm";
import PopupWithImage from "../scripts/components/PopupWithImage";
import PopupWithAgreement from "../scripts/components/PopupWithAgreement"
import Section from "../scripts/components/Section";
import UserInfo from "../scripts/components/UserInfo";
import Api from "../scripts/components/Api";

import {
  parametersFormValidator,
  profileName,
  profileJob,
  addButton,
  editButton,
  profileForm,
  placeForm,
} from "../scripts/units/constants";



export const avatar = document.querySelector('.profile__avatar')

//--------------------------   Api

const api = new Api ({
  url: "https://mesto.nomoreparties.co/v1/cohort-41/",
  headers: {
    authorization: "5ac24e56-6009-4399-abe6-aadfc281115b"
  }
})

// fetch('https://mesto.nomoreparties.co/v1/cohort-41/users/me', {
//   headers: {
//     authorization: '5ac24e56-6009-4399-abe6-aadfc281115b'
//   }
// })
//   .then(res => res.json())
//   .then((result) => {
//     console.log(result);
// });




//   //   мой личный токен авторизации  authorization: "5ac24e56-6009-4399-abe6-aadfc281115b"

//   //   номер когорты = "cohort-41"

//   //   мой id = "a97c5a8fdf6401cef9281092"


// GET https://mesto.nomoreparties.co/v1/cohortId/cards




fetch('https://mesto.nomoreparties.co/v1/cohort-41/cards', {
      method: 'GET',
      headers: {
        authorization: '5ac24e56-6009-4399-abe6-aadfc281115b'
      }
    })
    .then(res => res.json())
     .then((result) => {
       console.log(result)
})

Promise.all([api.getUserInfo(), api.getCardList()])
  .then((promiseResponseArray) => {
    profile.setAvatar(promiseResponseArray[0])
    profile.setUserInfo(promiseResponseArray[0])
    cardSection.renderItems(promiseResponseArray[1].reverse());
  }).catch(err => console.log(err));

// [
//   {
//     "likes": [],
//     "_id": "5d1f0611d321eb4bdcd707dd",
//     "name": "Байкал",
//     "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//     "owner": {
//       "name": "Jacques Cousteau",
//       "about": "Sailor, researcher",
//       "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
//       "_id": "ef5f7423f7f5e22bef4ad607",
//       "cohort": "local"
//     },
//     "createdAt": "2019-07-05T08:10:57.741Z"
//   },
//   {
//     "likes": [],
//     "_id": "5d1f064ed321eb4bdcd707de",
//     "name": "Архыз",
//     "link": "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//     "owner": {
//       "name": "Jacques Cousteau",
//       "about": "Sailor, researcher",
//       "avatar": "https://pictures.s3.yandex.net/frontend-developer/ava.jpg",
//       "_id": "ef5f7423f7f5e22bef4ad607",
//       "cohort": "local"
//     },
//     "createdAt": "2019-07-05T08:11:58.324Z"
//   }
// ]



//-------------------------- UserInfo

//данные пользователя
const profile = new UserInfo({
  nameSelector: "#profile-name",
  aboutSelector: "#profile-about",
  avatarSelector: ".profile__avatar",
  api
});

//-------------------------- Section

const cardSection = new Section(
  (cardItem) => {
    cardSection.addItem(createCard(cardItem, "a97c5a8fdf6401cef9281092"))
  },
  ".elements"
);

//-------------------------- Popup Image

const photoPopup = new PopupWithImage('#popup-card');

// //-------------------------- Card

function createCard(cardData, currentUser) {
  const card = new Card(cardData, currentUser, "#card",
    () => photoPopup.open({ name: cardData.name, link: cardData.link }),
    (card) => deletePopup.open(card),
    (card) => {
      if (!card.checkLike()) {
        // Запрос на лайк
        api.likeCard(cardData._id)
          // Обновление массива с лайками
          .then((likeArrayResponse) => card.likes = likeArrayResponse.likes)
          // Отрисовка лайка и счётчика
          .then(() => card.setLike())
      } else {
        api.removeLike(cardData._id)
          .then((likeArrayResponse) => card.likes = likeArrayResponse.likes)
          .then(() => card.removeLike())
      }
    })
  return card.generateCard()
}

// //-------------------------- Popup Delete

// const deletePopup = new PopupWithAgreement({
//   popupSelector: '#popup-agreement',
//   submitCallback: () => {
//     api.deleteCard(deletePopup.card._id)
//       .then(() => deletePopup.card.deleteCard())
//       .then(() => deletePopup.close())
//       .catch(err => console.log(err));
//   }
// });

// //-------------------------- Popup Form Profile

const profilePopup = new PopupWithForm({
  popupSelector: '#popup-profile',
  submitCallback: (userData) => {
    profilePopup.setPending()
    api.changeUserInfo(userData)
      .then((userData) => {
        profile.setUserInfo(userData)
        profilePopup.close()
      }).catch(err => console.log(err))
      .finally(() => profilePopup.removePending('Сохранить'))
  }
});
profilePopup.setEventListeners()


const profileFormValidator = new FormValidator(parametersFormValidator, '#profile-form')
profileFormValidator.enableValidation()

editButton.addEventListener('click', () => {
  profilePopup.setInputValues(profile.getUserInfo())

  // profileFormValidator.resetValidation()
  // profileFormValidator.toggleButtonState()

  profilePopup.open()
});


// //-------------------------- Popup Form Place

// // //попап формы места
// const popupPlace = new PopupWithForm({
//   popupSelector: '#popup-place',
//   submitCallback: (cardData) => {
//     popupPlace.setPending()
//     api.addCard(cardData)
//       .then((responseWithCard) => {
//         cardSection.addItem(createCard(responseWithCard, responseWithCard.owner._id));
//         popupPlace.close();
//       }).catch(err => console.log(err))
//       .finally(() => popupPlace.removePending('Создать'));
//   }
// });


// const placeFormValidator = new FormValidator(parametersFormValidator, '#place-form');
// placeFormValidator.enableValidation()



// const avatarValidator = new FormValidator(parametersFormValidator, '#avatar-form')
// avatarValidator.enableValidation()


