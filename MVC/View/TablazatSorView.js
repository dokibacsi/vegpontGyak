class TablaSor {
  #leiro;
  #szuloElem;
  constructor(leiro, szuloElem) {
    this.#leiro = leiro;
    this.#szuloElem = szuloElem;
    this.#sortLetrehoz();
  }

  #sortLetrehoz() {
    let txt = "<tr>";
    for (const KEY in this.#leiro) {
        const ELEM = this.#leiro[KEY]
        txt += `<td>${ELEM}</td>`;
    }
    txt += "</tr>";
  }
}

export default TablaSor;
