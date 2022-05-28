export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._name = document.querySelector(nameSelector);
    this._about = document.querySelector(aboutSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  setAvatar(link) {
    this._avatar.src = link.avatar;
  }

  setUserInfo(data) {
    this._name.textContent = data.name;
    this._about.textContent = data.about;
    this._id = data._id;
  }

  getInfo() {
    return {
      name: this._name.textContent,
      about: this._about.textContent
    };
  }

  getId(id) {
    return this._id;
  }
}
