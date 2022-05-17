import { profilePopup, placePopup } from '../../pages/index.js'
import { profileName, profileJob, nameInput, jobInput } from '../units/constants.js'


export default class FormValidator {
  constructor(data, form, openButton) {
    this._inputSelector = data.inputSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._formElement = form;
    this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
    this._submitButton = form.querySelector(data.submitButtonSelector);
    this._openButton = document.querySelector(openButton);
  }

  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);

    errorElement.textContent = errorMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _validateInput(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  toggleButtonState() {
    if (this._hasInvalidInput()) {
      this._submitButton.classList.add(this._inactiveButtonClass);
      this._submitButton.setAttribute("disabled", "true");
    } else {
      this._submitButton.classList.remove(this._inactiveButtonClass);
      this._submitButton.removeAttribute("disabled");
    }
  }

  _setEventListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._validateInput(inputElement);
        this.toggleButtonState();
      });

      this._openButton.addEventListener('click', () => {
        if (this._openButton.classList.contains('profile__edit-button')) {
          
          this.resetValidation()
          this.toggleButtonState()

          nameInput.value = profileName.textContent
          jobInput.value = profileJob.textContent

          profilePopup.open()
        }
        if (this._openButton.classList.contains('profile__add-button')) {
          
          this.resetValidation()
          this.toggleButtonState()
          placePopup.open()
        }
      })
    });
  }

  resetValidation() {
      this._inputList.forEach((inputElement) => {
        this._hideInputError(inputElement);
    });
  }

  enableValidation() {

    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault()
    })
    this._setEventListeners();
  }

}