

export default class Section {  //Первым параметром конструктора принимает объект с двумя свойствами: items и renderer. Свойство items — это массив данных, которые нужно добавить на страницу при инициализации класса. Свойство renderer — это функция, которая отвечает за создание и отрисовку данных на странице.

   constructor( {data, renderer}, containerSelector ) {
      this._initialArray = data;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
   }

   renderItems() {
      this._initialArray.forEach( item => {
         this.addItem(item)
      })
   }

   addItem(cardData) {
      const card = this._renderer(cardData)
      this._container.prepend(card)
   }
}