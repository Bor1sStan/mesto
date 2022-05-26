import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector, submitCallback }) {
    super(popupSelector);
    this._submitButton = this._popup.querySelector('.popup__save-button');
    this._submitCallback = submitCallback;
  }

  open(card) {
    this.card = card
    super.open()
  }

  setEventListeners() {
    this._submitButton.addEventListener('click', () => {
      this._submitCallback();
    })
    super.setEventListeners();
  }

}