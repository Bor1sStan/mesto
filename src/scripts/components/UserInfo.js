export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector, _id }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
    this._nameInput = document.querySelector(`${nameSelector}-input`);
    this._aboutInput = document.querySelector(`${aboutSelector}-input`);
    this._id = _id;
  }

  setAvatar(link) {
    this._avatar.src = link.avatar;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._id = data._id;
  }

  setId(_id) {
    this._id = _id;
  }

  getInfo() {
    return {
      name: this._name.textContent,
      nameInput: this._nameInput.value,
      about: this._about.textContent,
      aboutInput: this._about.textContent,
      _id: this._id,
    };
  }

  getId(id) {
    return this._id;
  }
}
