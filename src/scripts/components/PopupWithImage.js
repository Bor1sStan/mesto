
import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  //который наследуется от Popup
  constructor(popupSelector) {
    super(popupSelector);
    this._popupName = this._popup.querySelector(".popup__name");
    this._popupImage = this._popup.querySelector(".popup__image");
  }

  open({ place, link }) {
    //перезаписывает родительский метод open() Popup, который вставляет в попап картинку с подписью в картинку
    this._popupName.textContent = place;
    this._popupImage.src = link;
    super.open();
  }
}