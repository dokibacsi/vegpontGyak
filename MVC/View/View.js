import TablaView from "./TablazatView.js";

class View {
  #lista;
  constructor(lista, szuloElem) {
    console.log("VIEW!");
    this.#lista = lista;
    //console.log(this.#lista);
    new TablaView(this.#lista, szuloElem);
  }
}

export default View;
