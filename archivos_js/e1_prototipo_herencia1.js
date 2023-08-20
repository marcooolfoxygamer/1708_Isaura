function Animales(tipo) {
    this.tipo = tipo;
}

Animales.prototype.caminar = function (){
    return `El animal ${this.tipo} camina`;
}

const perro = new Animales("perro");
console.log(perro.caminar())

