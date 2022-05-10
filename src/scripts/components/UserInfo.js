

export class UserInfo {  //Класс UserInfo отвечает за управление отображением информации о пользователе на странице.
   constructor( {nameSelector, jobSelector} ) {
      //Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
      this._name = document.querySelector(nameSelector);
      this._nameInput = document.querySelector('${nameSelector}-input');
      this._job = document.querySelector(jobSelector);
      this._jobInput = document.querySelector('${jobSelector}-input');
   }

   getUserInfo() {
      //Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя. Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
      return {
         name: this._nameInput.value,
         job: this._jobInput.value
      }
   }

   setUserInfo( {name, job} ) {
      //Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
      this._name.textContent = name;
      this._nameInput.textContent = name;
      this._job.textContent = job;
      this._jobInput.textContent = job;
   }
   
}