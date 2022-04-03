// включение валидации вызовом enableValidation
// все настройки передаются при вызове

function enableValidation({
  formSelector,
  inputSelector,
  submitButtonSelector,
  errorSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
  validate
}) {
  const form = document.querySelector(formSelector);
  const input = form.querySelector(inputSelector);
  const submitButton = form.querySelector(submitButtonSelector);
  const error = form.querySelector(errorSelector);


  
  form.addEventListener('submit', function(evt) {
    evt.preventDefault()
    const errorMessage = validate(input.value);
    if (errorMessage) {
      error.classList.add(errorClass);
      error.textContent = errorMessage;
      input.classList.add(inputErrorClass);
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
      evt.stopImmediatePropagation();
      return
    }
  })

  input.addEventListener('input', function(evt) {
    const errorMessage = validate(evt.target.value);
    console.log(errorMessage, evt.target.value);
    if (errorMessage) {
      error.classList.add(errorClass);
      error.textContent = errorMessage;
      input.classList.add(inputErrorClass);
      submitButton.classList.add(inactiveButtonClass);
      submitButton.disabled = true;
      return
    }
    error.classList.remove(errorClass);
      input.classList.remove(inputErrorClass);
      submitButton.classList.remove(inactiveButtonClass);
      submitButton.disabled = false;
  })
}



enableValidation({
  formSelector: "#profileForm",
  inputSelector: "#name",
  submitButtonSelector: "#profile-save-button",
  inactiveButtonClass: ".popup__button_disabled",
  inputErrorClass: "form__input_error-type",
  errorClass: "form__error-input_active",
  errorSelector: "#name-error",
  validate: validateName
});

const EMPTY_FIELD_ERROR_MESSAGE = "Вы пропустили это поле";

function validateName(value) {
  if (!value) {
    return EMPTY_FIELD_ERROR_MESSAGE;
  }
  if (value.length < 2) {
    return `Минимальное количество символов: 2. Длина текста сейчас: ${value.length} символ.`;
  }
  if (value.length > 40) {
    return `Максимальное количество символов: 40. Длина текста сейчас: ${value.length} символ.`;
  }
  return null;
}
