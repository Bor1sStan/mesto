
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




// Учебный тренажер яндекса
/*
const myName = prompt('Как Вас зовут?', '');
console.log('Здравствуйте, ' + myName.slice(0, 1).toUpperCase() + myName.slice(1));
*/

let blokPoem = 'Ночь. Улица. Фонарь. Аптека';
let blokArray = blokPoem.split('.');

console.log(blokArray); // ["Ночь", "Улица", "Фонарь", "Аптека"]