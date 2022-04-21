

//   -----   Прописываем переменные   -----

//переменные кнопок
const buttonEdit = document.querySelector('.profile__edit-button');  //переменная кнопки редактирования профиля
const buttonAdd = document.querySelector('.profile__add-button');  //переменная кнопки добавления новой карточки
const buttonSaveProfile = document.querySelector('#profile-save-button');  //переменная кнопки сохранить для отправки данных профиля
const buttonCreatePlace = document.querySelector('#place-create-button');  //переменная кнопки сохранить для отправки данных профиля 

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

//переменные для попапа карточки
const popupCard = document.querySelector('#popup-card');  //переменная попапа карточки
const popupImage = document.querySelector('.popup__image');  //переменная картинки места для попапа
const popupName = document.querySelector('.popup__row');  //переменная имени места картинки для попапа
const elementImage = document.querySelector('.elements__image');  //переменная картинки элемента карточки
const elementPlace = document.querySelector('.elements__place');  //переменная названия места элемента карточки

//переменная для попапов
const popupList = document.querySelectorAll('.popup');  //переменная попапов

//пременные для карточек массива
const cardTemplate = document.querySelector('#card');  //переменная карточек
// const cards = {};  //переменная пустой массив для карточки


//   -----   Перебиравем начальный массив   -----

// const initialCards = [
//   {
//     name: "Челябинская область",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
//   },
//   {
//     name: "Иваново",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
//   },
//   {
//     name: "Камчатка",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
//   },
//   {
//     name: "Холмогорский район",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
//   },
//   {
//     name: "Байкал",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
//   },
//   {
//     name: "Архыз",
//     link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
//   },
// ];

// //выводим данные из массива в карточки
// initialCards.forEach(function(item, index, array) {
//   renderCard(item)
// });


//   -----   Прописываем функции   -----

// //функция создания новой картосчки
// function createCard(item) {

//   //прописываем переменные
//   const newCard = cardTemplate.content.cloneNode(true);
//   const cardName = newCard.querySelector('.elements__place');
//   const cardPhoto = newCard.querySelector('.elements__image');
//   const likeButton = newCard.querySelector('.elements__like-button');
//   const deleteButton = newCard.querySelector('.elements__delete-button');
  
//   //слушатели событий внутренних переменных
//   cardPhoto.addEventListener('click', () => previewCard(item));
//   likeButton.addEventListener('click', likeCard);
//   deleteButton.addEventListener('click', deleteCard);

//   //копирование значений 
//   cardPhoto.src = item.link;
//   cardPhoto.alt = item.name;
//   cardName.textContent = item.name;

//   return newCard;
// };

//функция генерации карточек
function renderCard(item) {
  cardElement.prepend(createCard(item));
};

//функция открытия попапов
function openPopup(item) {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', escButtonHandler);
};

//функция закрытия попапов
function closePopup(item) {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', escButtonHandler);
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
  renderCard({name:placeNameInput.value, link:placeWebsiteInput.value});
  closePopup(popupPlace);
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


// -----   Прописываем слушатели событий   -----

//слушатель открытия попапа места
buttonAdd.addEventListener('click', function () {
  placeNameInput.value = '';
  placeWebsiteInput.value = '';
  openPopup(popupPlace);
});

//слушатель открытия попапа профиля 
buttonEdit.addEventListener('click', function() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
  openPopup(popupProfile);
});

//слушатель собитый отправки данных в форму профиля
profileForm.addEventListener('submit', handleProfileFormSubmit);

//слушатель собитый отправки данных для создания карточки в форму карточки
placeForm.addEventListener('submit', handlePlaceFormSubmit);