import View from "../View/View.js";
import Model from "../Model/Model.js";
import DataService from "../Model/DataService.js";
import hibaView from "../View/hibaView.js";

class Controller {
  constructor() {
    console.log("Controller")
    this.dataService = new DataService
    this.dataService.getData("../adat.json", this.adatMegjelenit, this.hibaMegjelenit)
    new Model();
  }

  adatMegjelenit(lista){
    console.log(lista)
    new View(lista, $("#tablazat"))
  }

  hibaMegjelenit(error){
    new hibaView($(".lista"), error)
    console.log(error)
  }
}

export default Controller;
