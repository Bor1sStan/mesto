

export default class UserInfo {  //Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
   constructor( {nameSelector, jobSelector} ) {
      //Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
      this._name = document.querySelector(nameSelector);
      this._job = document.querySelector(jobSelector);
   }

   getUserInfo() {
      //Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
      return {
         name: this._name.textContent,
         job: this._job.textContent
      }
   }

   setUserInfo( {name, job} ) {
      //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
      this._name.textContent = name;
      this._job.textContent = job;
   }
   
}