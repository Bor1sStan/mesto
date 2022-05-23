export default class Card {
   constructor(cardData, currentUser, templateSelector, handleClickCard, handleDeleteCard, handleLikeCard) {
     this._name = cardData.name
     this._link = cardData.link
     this._templateSelector = templateSelector
     this._handleClickCard = handleClickCard
     this._handleDeleteCard = handleDeleteCard
     this._handleLikeCard = handleLikeCard
     this._currentUser = currentUser
     this._cardOwner = cardData.owner._id
     this._id = cardData._id
     this.likes = cardData.likes
   }
 
   checkLike() {
     return this.likes.some(item => item._id === this._currentUser)
   }
 
   _setLikeState() {
     if (this.checkLike()) {
       this.setLike()
     } else {
       this.removeLike()
     }
   }
 
   setLike() {
     this._cardLike.classList.add('elements__like-button_active');
     this._cardLikeCounter.textContent = this.likes.length;
   }
 
   removeLike() {
     this._cardLike.classList.remove('elements__like-button_active');
     this._cardLikeCounter.textContent = this.likes.length;
   }
 
   _getTemplate() {
     const cardTemplate = document
       .querySelector(this._templateSelector)
       .content.querySelector('.elements__element')
       .cloneNode(true);
     return cardTemplate
   }
 
   generateCard() {
     this._element = this._getTemplate();
     this._cardImage = this._element.querySelector('.elements__image');
     this._cardCaption = this._element.querySelector('.elements__place');
     this._cardLike = this._element.querySelector('.elements__like-button');
     this._cardLikeCounter = this._element.querySelector('.elements__like-meter');
     this._cardDelete = this._element.querySelector('.elements__delete-button');
     this._cardImage.src = this._link;
     this._cardImage.alt = this._name;
     this._cardCaption.textContent = this._name;
 
     if (this._cardOwner !== this._currentUser) {
       this._cardDelete.remove()
     }
 
     this._setLikeState();
     this._setEventListeners();
 
     return this._element
   }
 
   deleteCard() {
     this._element.remove()
   }
 
   _setEventListeners() {
     this._cardLike.addEventListener('click', () => {
       this._handleLikeCard(this);
     })
 
     this._cardDelete.addEventListener('click', () => {
       this._handleDeleteCard(this);
     })
 
     this._cardImage.addEventListener('click', () => {
       this._handleClickCard(this._name, this._link)
     });
   }
 }