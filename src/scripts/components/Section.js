

export default class Section {  //отвечает за отрисовку элементов на странице.
   constructor( {data, renderer}, containerSelector ) {
      this._initialArray = data;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
   }

   renderer() {
      this._initialArray.forEach( item => {
         this._renderer(item)
      })
   }

   addItem(element) {
      this._container.prepend(element)
   }
}