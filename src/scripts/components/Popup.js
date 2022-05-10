
export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._closeButton = this._popup.querySelector(".popup__close-button");
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    //функция открытие
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    //функция закрытие
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }

  _handleEscClose(evt) {
    //метод содержит логику закрытия попапа клавишей Esc
    if (evt.keydown === "Escape") {
      this.close();
    }
  }

  _handleOverlayClose(evt) {
    //метод содержит логику закрытия попапа кнопкой мышью на крестик и на оверлей
    if (evt.target.classList.contains("popup_opened")) {
      this.close();
    }
  }

  setEventListeners() {
    //который добавляет слушатель клика иконке закрытия попапа. Модальное окно также закрывается при клике на затемнённую область вокруг формы.
    this._popup.addEventListener("mousedown", (evt) => {
      this._handleEscClose(evt);
    });
    this._closeButton.addEventListener("click", () => this.close());
  }
}