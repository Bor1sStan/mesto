export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._nameInput = document.querySelector(`${nameSelector}-input`);
  }

  setAvatar(link) {
    this._avatar.src = link.avatar;
  }

  setUserId(id) {
    this._id = id;
  }

  setUserInfo({ name, about, id }) {
    this._name.textContent = name;
    this._about.textContent = about;
    this._id = id;
  }

  getInfo() {
    return {
      name: this._nameInput.value,
      aboutInput: this._about.textContent,
      id: this._id
    };
  }
}