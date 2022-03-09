
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

// Пишем скрипт для активации лайка
// Добавляем модификатор темного сердечка

const elements = document.querySelector('.elements');
const likeButton = elements.querySelector('.elements__like-button');
likeButton.addEventListener('click', function () {
   blackLike()
})

function blackLike() {
   const like = document.querySelector('.elements__like-button');
   like.classList.add('elements__like-button_active');
}

// Дописать скипрт для деактивации лайка
// Убрать модификатор для белого сердечка

const dislikeButton = document.querySelector('.elements__like-button_active');
dislikeButton.addEventListener('click', function() {
   whiteLike()
})

function whiteLike () {
   const dislike = document.querySelector('.elements__like-button_active')
   dislike.classList.remove('elements__like-button_active')
}
 


// Написать скрипт для редактирования имени и информации о себе

// Находим форму в DOM
const formElement = document.querySelector('.user-data-form')
// Находим поля формы в DOM
const nameInput = document.querySelector('.user-data-form__name')
const jobInput = document.querySelector('.user-data-form__job')

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей

    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 