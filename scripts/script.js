
//  -----    Прописываем все константы

// кнопки
const editButtonProfile = document.querySelector(".profile__edit-button"); // переменная кнопки редактирования профиля
const closeButtonProfile = document.querySelector("#close-button-profile"); // переменная кнопки закрытия профиля
const addButtonPlace = document.querySelector(".profile__add-button"); // переменная кнопка попапа добавления карточек
const closeButtonPlace = document.querySelector("#close-button-place"); // переменная кнопка попапа закрытия карточек

// попап профиля
const popupProfile = document.querySelector("#popup-profile"); // переменная popup с профилем пользователя
const profileName = document.querySelector(".profile__name"); // переменная имени профиля
const profileJob = document.querySelector(".profile__job"); // переменная работы профиля
const nameInput = document.querySelector("#name"); // переменная импута имени профиля
const jobInput = document.querySelector("#job"); // переменная импута работы профиля
const profileForm = document.querySelector(".user-data-form"); // переменная profileForm

// попап карточек мест
const popupPlace = document.querySelector("#popup-place"); // переменная popup с карточками мест
const elements = document.querySelector(".elements"); // переменная elements для элементов мест
const placeForm = document.querySelector("#placeForm"); // переменная placeForm отправки формы для новой карточки
const placeInput = document.querySelector("#place"); // переменная placeInput
const websiteInput = document.querySelector("#website"); // переменная websiteInput

// переменные для попапа новых карточек  
const elementTemplate = document.querySelector("#card"); // переменная для вёрстки карточек template
const popupCard = document.querySelector("#popup-card"); // перебираем карточки
const closeButtonCard = document.querySelector("#close-button-card"); // переменная кнопки закрытия попапа карточки


//  -----    Начальный массив карточек мест
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
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
];

// перебираем готовый массив
initialCards.forEach(({ name, link }) => {
  const newCard = elementTemplate.content.cloneNode(true); // переменная для новых карточек с копирование узла DOM
  newCard.querySelector(".elements__image").src = link;
  newCard.querySelector(".elements__place").textContent = name;
  elements.append(newCard);
});


//  -------------------------------------------------------------------------------------------------


// // функция закрытия карточки
// function closePopupCard() {
//   popupCard.classList.remove("popup_opened");
// }
// функция закрытия попапа профиля closePopupProfile
// function closePopupProfile() {
//   popupProfile.classList.remove("popup_opened");
// }
// функция закрытия попапа карточки месте closePopupPlace
// function closePopupPlace() {
//   popupPlace.classList.remove("popup_opened");
// }





// функция закрытия попапа
function closePopup(item) {
  item.classList.remove("popup_opened");
}


// функция открытия попапа каротчек мест openPopupPlace
function openPopup(item) {
  item.classList.add("popup_opened");
}


// функция открытия попапа профиля showPopupProfile
function showPopupProfile() {
  openPopup(popupProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}


// функция сохранения значений импутов, и закрытия попапа профиля по кнопке "Сохранить"
function formSubmitHandler(event) {
  event.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupProfile);
}


// функция активации лайков карточек
function likeButton(like) {
  like.classList.toggle("elements__like-button_active");
}











// функция открытия карточки в попапе
function showPopupCard(card) {
  const src = card.querySelector(".elements__image").src;
  const name = card.querySelector(".elements__place").textContent;
  popupCard.querySelector(".popup__image").src = src;
  popupCard.querySelector(".popup__row").textContent = name;
  popupCard.classList.add("popup_opened");
};


// функция добавления новых мест через попап карточек мест, с закрытием попапа
function submitNewPlace(event) {
  event.preventDefault();
  const newCard = elementTemplate.content.cloneNode(true); // переменная для новых карточек с копирование узла DOM
  newCard.querySelector(".elements__image").src = websiteInput.value;
  newCard.querySelector(".elements__place").textContent = placeInput.value;
  elements.prepend(newCard);
  closePopup(popupPlace);
}

// функция удаления карточки
function deleteCard(trashButton) {
   const elementCard = trashButton.closest(".elements__element");
   elementCard.remove();
};








//  -----    Прописываем все слушатели событий

// слушатель событий клик для открытия попапа карточки метса
addButtonPlace.addEventListener("click", () => openPopup(popupPlace));


// слушатель событий клик закрытия попапа пользователя
closeButtonProfile.addEventListener("click", () => closePopup(popupProfile));

// слушатель событий клик для закртыия попапа карточки места
closeButtonPlace.addEventListener("click", () => closePopup(popupPlace));

// слушатель событий клик для закрытия картинки попапа карточки
closeButtonCard.addEventListener("click", () => closePopup(popupCard));





// клик открытия попапа профиля пользователя
editButtonProfile.addEventListener("click", showPopupProfile);

// отправка данных в форму профиля
profileForm.addEventListener("submit", formSubmitHandler);

// сохранение новой карточки
placeForm.addEventListener("submit", submitNewPlace);

// слушатели событий для карточки
elements.addEventListener("click", function (event) {
  if (event.target.className.includes("elements__like-button")) {
    likeButton(event.target);  // активация 
    return;
  }
  if (event.target.className.includes('elements__delete-button')) {
     deleteCard(event.target);  // клик по урне это функция удаления карточки 
     return;
  }
  if (event.target.className.includes("elements__element")) {
    showPopupCard(event.target);  // клик по элементу карточки это функция открытия карточки 
    return;
  }
  const target = event.target.closest(".elements__element");
  if (target) {
    showPopupCard(target);  // клик по ближайшему к элементу карточки это функция открытия карточки
  }
});

