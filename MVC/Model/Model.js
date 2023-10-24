class Model {
  #adatLeiro;

  constructor(adatLeiro) {
    this.#adatLeiro = adatLeiro;
    console.log("MODEL!");
  }

  getAdatLeiro() {
    return this.#adatLeiro;
  }
}

export default Model;
