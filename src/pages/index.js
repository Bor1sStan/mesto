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
  nameInput,
  jobInput,
  addButton,
  editButton,
  profileForm,
  placeForm
} from "../scripts/units/constants";

import { initialCards } from "../scripts/units/initialCards";

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
    renderer: renderCard(cardData)        
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
    { name: cardData.name, link: cardData.link },
    "#card",
    () => {
      //функция открытия карточки попапа при клике
      popupImage.open({ name: cardData.name, link: cardData.link });
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

// //попап формы места
// export const placePopup = new PopupWithForm({
//   popupSelector: "#popup-place",
//   handleFormSubmit: (data) => {
//     //это колбэк сабмита формы, создание и добавление карточки
//     initialCardList.addItem(renderCard(data));
//     placePopup.close();
//   }
// });
// placePopup.setEventListeners();



//-------------------------- Form Validator 

const formValidators = {}

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(formElement, config)
// получаем данные из атрибута `name` у формы
    const formName = formElement.getAttribute('name')

   // вот тут в объект записываем под именем формы
    formValidators[formName] = validator;
   validator.enableValidation();
  });
};

enableValidation('#placeForm');

enableValidation('#profileForm');