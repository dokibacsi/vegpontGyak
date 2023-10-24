class hibaView{
    constructor(szuloElem, error){
        this.szuloElem = szuloElem
        console.log(szuloElem)
        this.szuloElem.html(error.message)
        console.log(error)
    }
}

export default hibaView