
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
// Удаляем модификатор открытия

const closeButton = document.querySelector(".popup__close-button");

closeButton.addEventListener("click", function() {
   closePopup()
})

function closePopup() {
   const popup = document.querySelector(".popup");
   popup.classList.remove("popup_opened");
}



// Пишем скрипт для активациии кнопки сердечка в елементах
// Добавляем модификатор для темного сердечка

const ableLikeButton = document.querySelectorAll(".elements__like-button")

ableLikeButton.addEventListener('click', function () {
   showBlackButton()
})

function showBlackButton() {
   const blackButton = document.querySelectorAll('.elements__like-button')
   blackButton.classList.add('elements__like-button_active')
}

// Удаляем модификатор для белого сердечка

const disableLikeButton = document.querySelector("elements__like-button_active")

disableLikeButton.addEventListener('click', function () {
   hideBlackButton()
})

function hideBlackButton() {
   const whiteButton = document.querySelector('elements__like-button_active')
   whiteButton.classList.remove('elements__like-button_active')
}
