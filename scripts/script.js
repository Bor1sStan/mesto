
// Прописываем все константы

const editButton = document.querySelector(".profile__edit-button"); // переменная кнопки редактирования
const closeButton = document.querySelector(".popup__close-button"); // переменная кнопки закрытия
const elements = document.querySelector('.elements'); // переменная перебора элементов карточек
const profileName = document.querySelector('.profile__name'); // переменная имени профиля
const profileJob = document.querySelector('.profile__job'); // переменная работы профиля 
const nameInput = document.querySelector('#name'); // переменная импута имени профиля
const jobInput = document.querySelector('#job'); // переменная импута работы профиля
const formElement = document.querySelector('.user-data-form'); // переменная forElement
const popup = document.querySelector(".popup"); // переменная popup



//  Прописываем все функции

// функция открытия попапа showPopup
function showPopup() {
   popup.classList.add("popup_opened");
}

// функция закрытия попапа closePopup
function closePopup() {
   popup.classList.remove("popup_opened");
}

// функция активации и деактивации лайка
function toggleLike(like) {
   like.classList.toggle('elements__like-button_active');
}

// функция сохранения значений импутов, и закрытия попапа по кнопке "Сохранить"
function formSubmitHandler (event) {
    event.preventDefault(); 
profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;
closePopup();
};



//  Прописываем все слушатели событий 

// клик открытия попапа
editButton.addEventListener("click", showPopup);

// клик закрытия попапа
closeButton.addEventListener("click",  closePopup);

// клик для лайка карточки
elements.addEventListener('click', function(event) {
   if (event.target.className.includes("elements__like-button")) {
      toggleLike(event.target)
   }    
});

// отправка данных в форму профиля 
formElement.addEventListener('submit', formSubmitHandler);