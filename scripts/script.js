

//  -----    Прописываем все константы

// кнопки 
const editButtonProfile = document.querySelector(".profile__edit-button"); // переменная кнопки редактирования профиля
const closeButtonProfile = document.querySelector("#close-button-profile"); // переменная кнопки закрытия профиля
const addButtonPlace = document.querySelector(".profile__add-button"); // переменная кнопка попапа добавления карточек
const closeButtonPlace = document.querySelector("#close-button-place"); // переменная кнопка попапа закрытия карточек 

// попап профиля
const popupProfile = document.querySelector('#popup-profile'); // переменная popup с профилем пользователя
const profileName = document.querySelector('.profile__name'); // переменная имени профиля
const profileJob = document.querySelector('.profile__job'); // переменная работы профиля
const nameInput = document.querySelector('#name'); // переменная импута имени профиля
const jobInput = document.querySelector('#job'); // переменная импута работы профиля
const formElement = document.querySelector('.user-data-form'); // переменная forElement

// попап карточек мест
const popupPlace = document.querySelector("#popup-place");  // переменная popup с карточками мест
const elements = document.querySelector(".elements");  // переменная elements для элементов мест
const placeForm = document.querySelector('#placeForm'); // переменная placeForm отправки формы для новой карточки
const placeInput = document.querySelector('#place'); // переменная placeInput 
const websiteInput = document.querySelector('#website'); // переменная websiteInput

// переменные для новых карточек
const elementTemplate = document.querySelector('#elementTemplate'); // переменная для вёрстки карточек template



//  -----    Начальный массив карточек мест
const initialCards = [
   {
     name: 'Архыз',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
   },
   {
     name: 'Челябинская область',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
   },
   {
     name: 'Иваново',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
   },
   {
     name: 'Камчатка',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
   },
   {
     name: 'Холмогорский район',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
   },
   {
     name: 'Байкал',
     link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
   }
];

// перебираем готовый массив 
initialCards.forEach(( {name , link} ) => {
   const newCard = elementTemplate.content.cloneNode(true); // переменная для новых карточек с копирование узла DOM
   newCard.querySelector(".elements__image").src = link;
   newCard.querySelector('.elements__place').textContent = name;
   elements.appendChild(newCard);
});








// УДАЛЕНИЕ ------------------------------------------------------------------------


// прописываем удаление карточек
const buttonDeleteCard = document.querySelector(".elements__delete-button"); // пременная кнопки для удаления карточки


// функция удаления карточки
function deleteCard() {
   const elementCard = buttonDeleteCard.closest('.elements__element')
   elementCard.remove()
}

// событие для клика удаления карточки
buttonDeleteCard.addEventListener("click", deleteCard);

// кто грязный читер????? я грязный грязный мальчик
// function deleteCard(evt) {
//    evt.target.closest('.element').remove();
//  }


// ---------------------------------------------------------------------------------



// ПОПАП С ФОТКОЙ ------------------------------------------------------------------------

// прописываем переменные
const popupCard = document.querySelectorAll('#popup-card') // перебираем карточки
const closeButtonCard = document.querySelector('#close-button-card'); // переменная кнопки закрытия попапа карточки
const popupImage = document.querySelector('.elements__image'); // переменная rfhnbyrb попапа карточки

// функция открытия карточки
function showPopupCard() {
   popupCard.classList.add("popup_opened");
}

// функция закрытия карточки
function closePopupCard() {
   popupCard.classList.remove("popup_opened");
}

// слушатель события открытия картинки попапа карточки
popupImage.addEventListener('click', showPopupCard)

// слушатель событий закрытия картинки попапа карточки
closeButtonCard.addEventListener('click', closePopupCard);







//  -----    Прописываем все функции

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
function openPopupPlace() {
   popupPlace.classList.add("popup_opened");
};

// функция закрытия попапа карточки месте closePopupPlace
function closePopupPlace() {
   popupPlace.classList.remove("popup_opened");
};

// функция активации лайков карточек
function likeButton(like) {
   like.classList.toggle('elements__like-button_active')
};

// функция добавления новых мест через попап карточек мест, с закрытием попапа
function submitNewPlace(event) {
   event.preventDefault();
   const newCard = elementTemplate.content.cloneNode(true); // переменная для новых карточек с копирование узла DOM
   newCard.querySelector(".elements__image").src=websiteInput.value;
   newCard.querySelector(".elements__place").textContent=placeInput.value;
   elements.appendChild(newCard);
   closePopupPlace();
};



//  -----    Прописываем все слушатели событий 

// клик открытия попапа профиля пользователя
editButtonProfile.addEventListener("click", showPopupProfile);

// клик закрытия попапа пользователя
closeButtonProfile.addEventListener("click", closePopupProfile);

// отправка данных в форму профиля 
formElement.addEventListener('submit', formSubmitHandler);

// клик для открытия попапа карточки метса
addButtonPlace.addEventListener("click", openPopupPlace);

// клик для закртыия попапа карточки места 
closeButtonPlace.addEventListener("click", closePopupPlace);

// клик для активации и деактивации лайка карточки
elements.addEventListener('click', function(event) {
   if (event.target.className.includes('elements__like-button')) {
      likeButton(event.target)
   }
});

// сохранение новой карточки
placeForm.addEventListener('submit', submitNewPlace);








