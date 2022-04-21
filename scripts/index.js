
import { Card } from "./Card.js";

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


const popupCard = document.querySelector('#popup-card');  //переменная попапа карточки
const popupImage = document.querySelector('.popup__image');  //переменная картинки места для попапа
const popupName = document.querySelector('.popup__row');  //переменная имени места картинки для попапа


const cardsContainer = document.querySelector('.elements'); //переменная секции карточек


//функция создания новой картосчки
function createCard(data) {
  const card = new Card (data, '#card');
  const cardElement = card.render
  
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;
  cardName.textContent = item.name;

  return card;
};




initialCards.forEach((data) => {
   const card = new Card (data, '#card');

   const cardElement = card.generateCard();

   cardsContainer.prepend(cardElement);
})