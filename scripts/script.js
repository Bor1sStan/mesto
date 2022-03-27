

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
const placeWebsiteInput = document.querySelector('#website');  //переменная импута ссылки места
const placeNameInput = document.querySelector('#place');  //переменная импута имени места

// переменные для попапа карточки
const elements = document.querySelector('.elements');  //переменная элементов карточек
const placeName = document.querySelector('.elements__place');  //переменная имени места

//пременные для карточек массива
const cardTemplate = document.querySelector('#card');  //переменная карточек
const card = document.querySelector('.elements');  //переменная элементов карточек




//   -----   Перебиравем начальный массив   -----
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


//функция создания новой картосчки
function createCard(item) {
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
  cardName.textContent = item.name;
  cardPhoto.src = item.link;
  cardPhoto.alt = item.name;

  return newCard;
};

//функция генерации карточек
function renderCard(item) {
  card.prepend(createCard(item));
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
function likeCard(evt) {
  evt.target.classList.toggle('element__like-button');
};

//функция удаления карточки
function deleteCard(evt) {
  evt.target.closest('.elements__element').remove();
};

//функция открытия попапа карточки
function previewCard(item) {
  // 👍
  photoPreviewImage.src = item.link;
  photoPreviewImage.alt = item.name;
  photoPreviewCaption.textContent = item.name;

  openPopup(photoPreview);
};



//   -----   Прописываем слушатели событий   -----

//слушатель открытия попапа профиля 
editButton.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
});

//слушатель сохранения данных попапа профиля
function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
};

//слушатель закрытия попапа профиля 
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile));

//слушатель открытия попапа место 
addButton.addEventListener('click', () => openPopup(popupPlace));

//слушатель закрытия попапа место
closeButtonPlace.addEventListener('click', () => closePopup(popupPlace));