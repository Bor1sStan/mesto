export default class UserInfo {
   constructor({ nameSelector, aboutSelector, avatarSelector, api }) {
     this._name = document.querySelector(nameSelector)
     this._nameInput = document.querySelector(`${nameSelector}-input`)
     this._about = document.querySelector(aboutSelector)
     this._aboutInput = document.querySelector(`${aboutSelector}-input`)
     this._avatar = document.querySelector(avatarSelector)
     this._api = api
   }
 
   getUserInfo() {
     return {
       name: this._nameInput.value,
       about: this._aboutInput.value,
       avatar: this._avatar.src
     }
   }
 
   setAvatar(link) {
     this._avatar.src = link.avatar
   }
 
   setUserInfo({ name, about }) {
     this._name.textContent = name;
     this._nameInput.textContent = name;
     this._about.textContent = about;
     this._aboutInput.textContent = about;
   }

}