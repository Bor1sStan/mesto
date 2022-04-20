


export class Card {
   constructor( data, templateSelector ) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector
   }


   _getTemplate() {
      const cardElement = document
         .querySelector(this._templateSelector)
         .content
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
      this._cardLikeButton.addEventListener('click', this._likeCard);
      this._cardDeleteButton.addEventListener('click', this._deleteCard);
   }

   _likeCard(event) {
      event.target.classList.toggle('elements__like-button_active');
   };

   _deleteCard(event) {
      event.target.closest('.elements__element').remove();
   };

}