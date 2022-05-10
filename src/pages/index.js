
// В этом файлы должны быть прописаны функции, создание новых классов, попапов и форм валидации. Все переменные прописаны в units|constants.

import Card from '../scripts/components/Card.js';
import FormValidator from '../scripts/components/FormValidator.js.js';
import Popup from '../scripts/components/Popup.js';
import PopupWithForm from '../scripts/components/PopupWithForm.js';
import PopupWithImage from '../scripts/components/PopupWithImage.js';
import Section from '../scripts/components/Section.js';
import UserInfo from '../scripts/components/UserInfo.js';


import { 

  parametersFormValidator,
  placeForm,
  profileForm,
  popupCardImage,
  cardTemplate



} from '../scripts/units/constants.js';


import { initialCards } from '../scripts/units/initialCards.js';



//данные пользователя  
const profile = new UserInfo( {nameSelector: '.profile__name', jobSelector: '.profile__job'} )


const initialCardList = new Section({
  data: initialCards,
  renderer: (cardData) => {
    initialCardList.addItem(renderCard(cardData));
  }
}, '.elements')
initialCardList.renderer();


//попап картинки
const popupImage = new PopupWithImage(popupCardImage);
popupImage.setEventListeners()


//функция подбора карточки
function renderCard(cardData) {
  const card = new Card ( { name: cardData.name, link: cardData.link }, cardTemplate, () => { 
    //функция открытия карточки попапа при клике
    popupImage.open( { name: cardData.name, link: cardData.link } )

    return card.generateCard()
  } )
}


//попап формы профиля s
const profilePopup = new PopupWithForm( {
  popupSelector: '#popup-profile',
  handleFormSubmit: (data) => { //это колбэк сабмита формы 
    initialCardList.addItem(renderCard(data));
    profilePopup.close();
  }
});
profilePopup.setEventListeners();


//попап формы места 
const placePopup = new PopupWithForm( {
  popupSelector: '#popup-place',
  handleFormSubmit: (data) => { //это колбэк сабмита формы 
    initialCardList.addItem(renderCard(data));
    placePopup.close();
  }
});
placePopup.setEventListeners()


//валидация попапа формы места
const placeFormValidator = new FormValidator(parametersFormValidator, placeForm);
placeFormValidator.enableValidation();//функция валидации формы места


//валидация попапа формы профиля
const profileFormValidator = new FormValidator(parametersFormValidator, profileForm);
profileFormValidator.enableValidation(); //функция валидации формы профиля


