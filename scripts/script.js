
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
elements.addEventListener('click', function(event) {
   if (event.target.className.includes("elements__like-button")) {
      toggleLike(event.target)
   }    
})

function toggleLike(like) {
   like.classList.toggle('elements__like-button_active');
}


// Написать скрипт для редактирования имени и информации о себе

// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function formSubmitHandler (event) {
    event.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
const profileName = document.querySelector('.profile__name')
const profileJob = document.querySelector('.profile__job')
const nameInput = document.querySelector('.user-data-form__name')
const jobInput = document.querySelector('.user-data-form__job')

profileName.textContent = nameInput.value;
profileJob.textContent = jobInput.value;

    // Выберите элементы, куда должны быть вставлены значения полей
closePopup();
    // Вставьте новые значения с помощью textContent
}
const formElement = document.querySelector('.user-data-form')
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 