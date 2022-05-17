
//Свяжите класс Card c попапом. Сделайте так, чтобы Card принимал в конструктор функцию handleCardClick. Эта функция должна открывать попап с картинкой при клике на карточку

export default class Card {
   constructor( { name, link }, templateSelector, handleCardClick ) {
      this._name = name;
      this._link = link;
      this._templateSelector = templateSelector;
      this._handleCardClick = handleCardClick;
   }

   _getTemplate() {
      const cardElement = document
         .querySelector(this._templateSelector)
         .content
         .querySelector('.elements__element')
         .cloneNode(true);

         return cardElement;
   }

   generateCard() {
      this._element = this._getTemplate();
      
      this._cardImage = this._element.querySelector('.elements__image');
      this._cardPlace = this._element.querySelector('.elements__place');
      this._cardLikeButton = this._element.querySelector('.elements__like-button');
      this._cardDeleteButton = this._element.querySelector('.elements__delete-button');

      this._cardImage.src = this._link;
      this._cardImage.alt = this._name;
      this._cardPlace.textContent = this._name;
      
      this._setEventListeners();

      return this._element
   }
   
   _setEventListeners() {
      this._cardLikeButton.addEventListener('click', () => {
         this._handleLikeClick();
      })
      
      this._cardDeleteButton.addEventListener('click', () => {
         this._handleDeleteClick();
      })

      this._cardImage.addEventListener('click', () => {
         this._handleCardClick();
      })
   }
   
   _handleLikeClick() {
      this._cardLikeButton.classList.toggle('elements__like-button_active')
   }

   _handleDeleteClick() {
      this._element.remove();
      this._element = null;
   }
}