export default class Tirar_dado {
    constructor(){
        this.tirar();
    }

    get resultado() {
        return this._resultado;
    }

    tirar() {
        this._resultado = Math.trunc(Math.random()*6)+1;
    }
}