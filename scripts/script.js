
// Пишем скрипт для активации кнопки редактирования профиля
// Добавляем модификатор открытия попапа

const editButton = document.querySelector(".profile__edit-button");

editButton.addEventListener("click", function() {
   showPopup()
})

function showPopup() {
   const popup = document.querySelector(".popup");
   popup.classList.add("popup_opened");
}

// Клик крестика для закрытия попапа
// Удаляем модификатор открытия попапа

const closeButton = document.querySelector(".popup__close-button");

closeButton.addEventListener("click", function() {
   closePopup()
})

function closePopup() {
   const popup = document.querySelector(".popup");
   popup.classList.remove("popup_opened");
}

// Пишем скрипт для активации и деактивации лайка карточки

const elements = document.querySelector('.elements');
elements.addEventListener('click', function(event) {
   if (event.target.className.includes("elements__like-button")) {
      toggleLike(event.target)
   }    
})

function toggleLike(like) {
   like.classList.toggle('elements__like-button_active');
}

// Пишем скрипт для ввода данных в поля попапа. Закрытие попапа при нажатии кнопки Сохранить. 

function formSubmitHandler (event) {
    event.preventDefault(); 
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const nameInput = document.querySelector('.user-data-form__name')
const jobInput = document.querySelector('.user-data-form__job')

profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;

closePopup();
}

const formElement = document.querySelector('.user-data-form')

formElement.addEventListener('submit', formSubmitHandler); 