

export default class Section {  //отвечает за отрисовку элементов на странице.
   constructor( {data, renderer}, containerSelector ) {
      this._initialArray = data;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
   }

   renderItems() {
      this._initialArray.forEach( item => {
         const newElement = this._renderer(item)
         this._container.prepend(newElement)
      })
   }

   addItem(element) {
      this._container.prepend(element)
   }
}