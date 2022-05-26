import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super(popupSelector);
    this._inputList = this._popup.querySelectorAll('.form__input');
    this._submitButton = this._popup.querySelector('.form__save-button');
    this._form = this._popup.querySelector('.form');
    this._submitCallback = submitCallback;
  }

  setPending() {
    this._submitButton.textContent = 'Сохранение...'
  }

  removePending(text) {
    this._submitButton.textContent = text
  }

  _getInputValues() {
    this._inputValues = {};
    this._inputList.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });
    return this._inputValues;
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      input.value = data[input.name]
    })
  }
  
  setEventListeners() {
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault()
      this._submitCallback(this._getInputValues());
    })
    super.setEventListeners();
  }

  close() {
    super.close();
    setTimeout( () => { this._form.reset() }, 300)     
  }
}