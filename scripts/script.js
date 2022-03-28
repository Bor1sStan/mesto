<<<<<<< HEAD

//  -----    Прописываем все константы

// кнопки
const editButtonProfile = document.querySelector(".profile__edit-button"); // переменная кнопки редактирования профиля
const closeButtonProfile = document.querySelector("#close-button-profile"); // переменная кнопки закрытия профиля
const addButtonPlace = document.querySelector(".profile__add-button"); // переменная кнопка попапа добавления карточек
const closeButtonPlace = document.querySelector("#close-button-place"); // переменная кнопка попапа закрытия карточек

// попап профиля
const popupProfile = document.querySelector("#popup-profile"); // переменная popup с профилем пользователя
const profileName = document.querySelector(".profile__name"); // переменная имени профиля
const profileJob = document.querySelector(".profile__job"); // переменная работы профиля
const nameInput = document.querySelector("#name"); // переменная импута имени профиля
const jobInput = document.querySelector("#job"); // переменная импута работы профиля
const formElement = document.querySelector(".user-data-form"); // переменная forElement

// попап карточек мест
const popupPlace = document.querySelector("#popup-place"); // переменная popup с карточками мест
const elements = document.querySelector(".elements"); // переменная elements для элементов мест
const placeForm = document.querySelector("#placeForm"); // переменная placeForm отправки формы для новой карточки
const placeInput = document.querySelector("#place"); // переменная placeInput
const websiteInput = document.querySelector("#website"); // переменная websiteInput

// переменные для попапа новых карточек  
const elementTemplate = document.querySelector("#elementTemplate"); // переменная для вёрстки карточек template
const popupCard = document.querySelector("#popup-card"); // перебираем карточки
const closeButtonCard = document.querySelector("#close-button-card"); // переменная кнопки закрытия попапа карточки


//  -----    Начальный массив карточек мест

=======


//   -----   Прописываем переменные   -----

// переменные кнопок
const editButton = document.querySelector('.profile__edit-button');  //переменная кнопки редактирования профиля
const addButton = document.querySelector('.profile__add-button');  //переменная кнопки добавления новой карточки
const closeButtonProfile = document.querySelector('#close-button-profile');  //переменная кнопки крестика для закрытия попапа пользователя
const closeButtonPlace = document.querySelector('#close-button-place');  //переменная кнопки крестика для закрытия попапа места
const closeButtonCard = document.querySelector('#close-button-card');  //переменная кнопки крестика для закрытия попапа карточки
const saveButtonProfile = document.querySelector('#profile-save-button');  //переменная кнопки сохранить для отправки данных профиля
const createButtonPlace = document.querySelector('#place-create-button');  //переменная кнопки сохранить для отправки данных профиля 

// переменные для попапа профиля
const popupProfile = document.querySelector('#popup-profile');  //переменная попапа профиля
const profileName = document.querySelector('.profile__name');  //переменная имени профиля
const profileJob = document.querySelector('.profile__job');  //переменная работы профиля
const nameInput = document.querySelector('#name');  //переменная импута имени профиля
const jobInput = document.querySelector('#job');  //переменная импута работы профиля
const profileForm = document.querySelector('#profileForm');  //переменная формы профиля

// переменные для попапа места
const popupPlace = document.querySelector('#popup-place');  //переменная попапа места
const placeNameInput = document.querySelector('#place');  //переменная импута имени места
const placeWebsiteInput = document.querySelector('#website');  //переменная импута ссылки места
const placeForm = document.querySelector('#placeForm');  //переменная формы места

// переменные для попапа карточки
const popupCard = document.querySelector('#popup-card');  //переменная попапа карточки

const popupImage = document.querySelector('.popup__image');  //переменная картинки места для попапа
const popupName = document.querySelector('.popup__row');  //переменная имени места картинки для попапа

const elementImage = document.querySelector('.elements__image');  //переменная картинки элемента карточки
const elementPlace = document.querySelector('.elements__place');  //переменная названия места элемента карточки

//пременные для карточек массива
const cardTemplate = document.querySelector('#card');  //переменная карточек
const cardElement = document.querySelector('.elements');  //переменная элементов карточек
const card = {};  //переменная пустой массив для карточки




//   -----   Перебиравем начальный массив   -----
>>>>>>> develop
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
//выводим данные из массива в карточки
initialCards.forEach(function(item, index, array) {
  renderCard(item)
});


//   -----   Прописываем функции   -----

<<<<<<< HEAD

// функция открытия карточки
function showPopupCard(card) {
  const src = card.querySelector(".elements__image").src;
  const name = card.querySelector(".elements__place").textContent;
  popupCard.querySelector(".popup__image").src = src;
  popupCard.querySelector(".popup__row").textContent = name;
  popupCard.classList.add("popup_opened");
}
=======
>>>>>>> develop

//функция создания новой картосчки
function createCard(item) {

  //прописываем переменные
  const newCard = cardTemplate.content.cloneNode(true);
  const cardName = newCard.querySelector('.elements__place');
  const cardPhoto = newCard.querySelector('.elements__image');
  const likeButton = newCard.querySelector('.elements__like-button');
  const deleteButton = newCard.querySelector('.elements__delete-button');

  //слушатели событий внутренних переменных
  cardPhoto.addEventListener('click', () => previewCard(item));
  likeButton.addEventListener('click', likeCard);
  deleteButton.addEventListener('click', deleteCard);

  //копирование значений 
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;
  cardName.textContent = item.name;

  return newCard;
};

//функция генерации карточек
function renderCard(item) {
  cardElement.prepend(createCard(item));
};

//функция открытия попапов
function openPopup(item) {
  item.classList.add('popup_opened');
};

//функция закрытия попапов
function closePopup(item) {
  item.classList.remove('popup_opened');
};

//функция лайка карточки
function likeCard(event) {
  event.target.classList.toggle('elements__like-button_active');
};

//функция удаления карточки
function deleteCard(event) {
  event.target.closest('.elements__element').remove();
};

//функция открытия попапа карточки
function previewCard(item) {
  popupImage.src = item.link;
  popupName.alt = item.name;
  popupName.textContent = item.name;
  openPopup(popupCard);
};



<<<<<<< HEAD

// клик открытия попапа профиля пользователя
editButtonProfile.addEventListener("click", showPopupProfile);
=======
//   -----   Прописываем слушатели событий   -----
>>>>>>> develop


//функция сохранения данных попапа профиля
function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};


//функция отправки данных попапа метса
function handlePlaceFormSubmit(event) {
  event.preventDefault();
  card.name = placeNameInput.value;
  card.link = placeWebsiteInput.value;
  renderCard(card);
  closePopup(popupPlace);
};


<<<<<<< HEAD
// слушатель событий для карточки
elements.addEventListener("click", function (event) {
  if (event.target.className.includes("elements__like-button")) {
    likeButton(event.target);   // клик активация и деактивация лайка
    return;
  }
  if (event.target.className.includes('elements__delete-button')) {
     deleteCard(event.target);   // клик для удаления карточки
     return;
  }
  if (event.target.className.includes("elements__element")) {
    showPopupCard(event.target);   // клик для активация попапа по элементу карточки
    return;
  }
  const target = event.target.closest(".elements__element");
  if (target) {
    showPopupCard(target);   // клик для активация попапа по близкому элементу карточки
  }
});

// сохранение новой карточки
placeForm.addEventListener("submit", submitNewPlace);
=======

//слушатель открытия попапа места
addButton.addEventListener('click', function () {
  placeNameInput.value = '';
  placeWebsiteInput.value = '';
  openPopup(popupPlace);
});

//слушатель открытия попапа профиля 
editButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
});

//слушатель закрытия попапа профиля 
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));


//слушатель закрытия попапа место
closeButtonPlace.addEventListener('click', () => closePopup(popupPlace));


//слушатель закрытия попапа карточки
closeButtonCard.addEventListener('click', () => closePopup(popupCard));





//слушатель собитый отправки данных в форму профиля
profileForm.addEventListener('submit', handleProfileFormSubmit);

//слушатель собитый отправки данных для создания карточки в форму карточки
placeForm.addEventListener('submit', handlePlaceFormSubmit);

>>>>>>> develop
