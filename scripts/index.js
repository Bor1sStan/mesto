
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

//переменные для попап карточек
export const popupCard = document.querySelector('#popup-card');  //переменная попапа карточки
export const popupImage = document.querySelector('.popup__image');  //переменная картинки места для попапа
export const popupName = document.querySelector('.popup__row');  //переменная имени места картинки для попапа

//переменная для списка попапов
const popupList = document.querySelectorAll('.popup');  //переменная попапов

//переменные для попапа профиля
const popupProfile = document.querySelector('#popup-profile');  //переменная попапа профиля
const profileName = document.querySelector('.profile__name');  //переменная имени профиля
const profileJob = document.querySelector('.profile__job');  //переменная работы профиля
const nameInput = document.querySelector('#name');  //переменная импута имени профиля
const jobInput = document.querySelector('#job');  //переменная импута работы профиля
const profileForm = document.querySelector('#profileForm');  //переменная формы профиля

//переменные для попапа места
const popupPlace = document.querySelector('#popup-place');  //переменная попапа места
const placeNameInput = document.querySelector('#place');  //переменная импута имени места
const placeWebsiteInput = document.querySelector('#website');  //переменная импута ссылки места
const placeForm = document.querySelector('#placeForm');  //переменная формы места

//переменные кнопок для попапа профиля
const buttonEdit = document.querySelector('.profile__edit-button');  //переменная кнопки редактирования профиля
const buttonAdd = document.querySelector('.profile__add-button');  //переменная кнопки добавления новой карточки
const buttonCreatePlace = document.querySelector('#place-create-button');  //переменная кнопки сохранить для отправки данных профиля 

//переменная для контейнера списка карточек
const cardsContainer = document.querySelector('.elements'); //переменная секции карточек


const cardTemplate = document.querySelector('#card');  //переменная карточек




function handlePlaceFormSubmit(event) {
  event.preventDefault();
  
  //как сюда вставить this._карточки для генерации

  closePopup(popupPlace);
};


//слушатель событий на открытие попапа места
buttonAdd.addEventListener('click', () => {
  placeNameInput.value = '';
  placeWebsiteInput.value = '';
  openPopup(popupPlace)
});




// //слушатель событий на сохранение карточки из попапа места
// placeForm.addEventListener('submit', handlePlaceFormSubmit);



//функция создания новой карточки
function createCard(data) {
  const card = new Card (data, '#card');
  const cardElement = card.generateCard()
  
  return card;
};

//функция генерации карточки
function generateCard(Card) {
  cardsContainer.prepend(createCard(Card))
}






//функция открытия попапов
export function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', escButtonHandler);
};

//функция закрытия попапов
function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', escButtonHandler);
};

//функция закрытия попапа на оверлей и кнопки на крестик
popupList.forEach((item) => {
  item.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(item);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(item)
    }
  });  
});

//функция закрытия попапа на кнопку Escape
const escButtonHandler = (evt) => {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');  //переменная открытых попапов
    closePopup(popupOpened);
  }
};

//функция сохранения данных профиля
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile)
}

//слушатель событий на открытие попапа профиля
buttonEdit.addEventListener('click', () => {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile)
})

//слушатель событий на сохранение данных профиля ил попапа профиля
profileForm.addEventListener('submit', handleProfileFormSubmit);




//перебираем начальный массив
initialCards.forEach((data) => {
   const card = new Card (data, '#card');

   const cardElement = card.generateCard();

   cardsContainer.prepend(cardElement);
})