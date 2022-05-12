
import Popup from "./Popup";

export default class PopupWithForm extends Popup{   //который наследуется от Popup 
   constructor( {popupSelector, handleFormSubmit} ) {   //кроме селектора попапа принимает в конструктор колбэк сабмита формы
      super(popupSelector);
      this._inputList = this._popup.querySelectorAll('.form__input');
      this._buttonSubmit = this._popup.querySelector('.form__save-button')
      this._form = this._popup.querySelector('.form');
      this._handleFormSubmit = handleFormSubmit;
   }

   _getInputValues() {  //собирает данные всех полей формы.
      this._formValues = {};
      this._inputList.forEach((input) => {
         this._formValues[input.name] = input.value
      })
      return this._formValues;
   }

   setEventListeners() {   //Перезаписывает родительский метод
      //метод должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы

      this._form.addEventListener('submit', () => {
         
         this._handleFormSubmit(this._getInputValues())
      })

      super.setEventListeners()
   }

   close() {   //Перезаписывает родительский метод
      //при закрытии попапа форма должна ещё и сбрасываться

      super.close()
      this._form.reset()
   }
}