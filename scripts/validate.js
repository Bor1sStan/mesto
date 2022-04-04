
//Функция демонстрации ошибки импута
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  inputErrorClass,
  errorClass
) => {
  
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(inputErrorClass);

  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};


//Функция скрытия ошибки импута
const hideInputError = (
   formElement,
   inputElement,
   inputErrorClass,
   errorClass
) => {

   const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
   inputElement.classList.remove(inputErrorClass);

   errorElement.classList.remove(errorClass);
   errorElement.textContent = '';
};


//Функция валидности вносимых значений импута
const isValid = (
   formElement,
   inputElement,
   { inputErrorClass, errorClass }
) => {
   if (!inputElement.validity.valid) {
     showInputError(formElement, inputElement, inputElement.validationMessage, inputErrorClass, errorClass);
   } else {
     hideInputError(formElement, inputElement, inputErrorClass, errorClass);
   }
};


// функция валидности импутов формы
const hasInvalidInput = (inputList) => {
   return inputList.some((inputElement) => {
     return !inputElement.validity.valid;;
   })
};


// функция переключения кнопки
const toggleButtonState = (
   inputList,
   buttonElement,
   inactiveButtonClass
   ) => {
   
   if (hasInvalidInput(inputList)) {
     
     buttonElement.classList.add(inactiveButtonClass);
     buttonElement.setAttribute("disabled", "true");
   } else {
     buttonElement.classList.remove(inactiveButtonClass);
     buttonElement.removeAttribute("disabled");
 
   }
};


// вешаем обработчик событий проверки валидации для импутов
const setEventListeners = (
   formElement,
   { inputSelector, submitButtonSelector, inactiveButtonClass, ...rest }
   ) => {
   
   const inputList = Array.from(formElement.querySelectorAll(inputSelector));   
   const buttonElement = formElement.querySelector(submitButtonSelector);
   
   toggleButtonState(inputList, buttonElement, inactiveButtonClass);

   inputList.forEach((inputElement) => {
     inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement, rest);
      toggleButtonState(inputList, buttonElement, inactiveButtonClass)
   });
});


// вешаем обработчик событий
editButton.addEventListener('click', function() {

   nameInput.value = profileName.textContent
   jobInput.value = profileJob.textContent

   toggleButtonState(inputList, buttonElement, inactiveButtonClass)
   openPopup(popupProfile);
 });

 addButton.addEventListener('click', function() {
   
   popupPlace.reset();

   toggleButtonState(inputList, buttonElement, inactiveButtonClass)
   openPopup(popupPlace);
 });
};


// стартует функцию валидации
const enableValidation = (
   { formSelector, ...rest }
) => {
   
   const formList = Array.from(document.querySelectorAll(formSelector))
   formList.forEach((formElement) => {
     formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
   })
     setEventListeners(formElement, rest);
   })
};


// включение валидации вызовом enableValidation
// все настройки передаются при вызове

enableValidation({
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__save-button",
  inactiveButtonClass: "form__save-button_disabled",
  inputErrorClass: "form__input_error-type",
  errorClass: "form__error_visible",
});
