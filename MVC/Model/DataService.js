class DataService {
  constructor() {}

  getData(apiVegpont, callBack, hibaCallBack) {
    axios
      .get(apiVegpont)
      .then(function (response) {
        /*console.log(" Válasz objektum:", response); // Válasz objektum
        console.log("Adatok:", response.data.nevek); //Adatok
        console.log("Státusz:", response.status); //Státusz
        console.log("Státusz szöveg:", response.statusText); //Státusz szöveg
        console.log("Válasz Fejléc:", response.headers); //Válasz Fejléc
        console.log("Válasz config:", response.config); //Válasz config*/
        callBack(response.data.nevek);
      })
      .catch(function (error) {
        hibaCallBack(error)
      })
      .finally(function () {
      });
      
  }
}

export default DataService