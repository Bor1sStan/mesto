
// Прописываем все константы

// кнопки 
const editButtonProfile = document.querySelector(".profile__edit-button"); // переменная кнопки редактирования профиля
const closeButtonProfile = document.querySelector("#close-button-profile"); // переменная кнопки закрытия профиля
const addButtonCard = document.querySelector(".profile__add-button");   // переменная кнопка добавления карточек
const closeButtonCard = document.querySelector("#close-button-card");   // переменная кнопка закрытия попапа карточек 

// попап профиля
const popupProfile = document.querySelector("#popup-profile"); // переменная popup с профилем пользователя
const profileName = document.querySelector('.profile__name'); // переменная имени профиля
const profileJob = document.querySelector('.profile__job'); // переменная работы профиля
const nameInput = document.querySelector('#name'); // переменная импута имени профиля
const jobInput = document.querySelector('#job'); // переменная импута работы профиля

// попап карточек мест
const popupCard = document.querySelector("#popup-card");  // переменная popup с карточками мест
const elements = document.querySelector(".elements");  // переменная elements для элементов мест
const formElement = document.querySelector('.user-data-form'); // переменная forElement



//  Прописываем все функции

// функция открытия попапа профиля showPopupProfile 
function showPopupProfile() {
   popupProfile.classList.add("popup_opened");
   nameInput.value = profileName.textContent;
   jobInput.value = profileJob.textContent;
};

// функция закрытия попапа профиля closePopupProfile
function closePopupProfile() {
   popupProfile.classList.remove("popup_opened");
};

// функция сохранения значений импутов, и закрытия попапа профиля по кнопке "Сохранить"
function formSubmitHandler (event) {
    event.preventDefault(); 
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;
closePopupProfile();
};

// функция открытия попапа каротчек мест openPopupPlace
function openPopupCard() {
   popupCard.classList.add("popup_opened");
};

// функция закрытия попапа карточки месте closePopupCard
function closePopupCard() {
   popupCard.classList.remove("popup_opened");
};



//  Прописываем все слушатели событий 

// клик открытия попапа профиля пользователя
editButtonProfile.addEventListener("click", showPopupProfile);

// клик закрытия попапа пользователя
closeButtonProfile.addEventListener("click",  closePopupProfile);

// отправка данных в форму профиля 
formElement.addEventListener('submit', formSubmitHandler);

// клик для открытия попапа карточки метса
addButtonCard.addEventListener("click", openPopupCard);

// клик для закртыия попапа карточки места 
closeButtonCard.addEventListener("click", closePopupCard);