import TablaSor from "./TablazatSorView.js";
class TablaView {
    #szuloElem;
    #lista
  constructor(lista, szuloElem) {
    this.#szuloElem = szuloElem;
    this.#lista = lista;
    const TABLAELEM = $("table")
    this.#tablaMegjelenit(this.#tablaOsszeallit(this.#lista), TABLAELEM);
  }

  #tablaOsszeallit(lista, tblElem) {
    let txt = ``;
    for (let index = 0; index < lista.length; index++) {
        new TablaSor(lista[index], tblElem);
    }
    return txt;
  }

  #tablaMegjelenit(txt) {
    this.#szuloElem.html(txt);
  }
}

export default TablaView;
