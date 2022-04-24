import { openPopup, popupCard, popupImage, popupName } from './index.js';


export class Card {
   constructor( data, templateSelector ) {
      this._name = data.name;
      this._link = data.link;
      this._templateSelector = templateSelector;
      
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
         this._handleShowCardClick(this._name, this._link);
      })

   }
   
   _handleShowCardClick() {
      popupImage.src = this._link;
      popupName.alt = this._name;
      popupName.textContent = this._name;
      openPopup(popupCard)
   }

   _handleLikeClick() {
      this._cardLikeButton.classList.toggle('elements__like-button_active')
   }

   _handleDeleteClick() {
      this._element.remove('elements__element')
   }
}