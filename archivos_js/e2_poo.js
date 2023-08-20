class Animales {
    constructor(nombre) {
        this.nombre = nombre
    }
    caminar() {
        return `El ${this.tipo} llamado ${this.nombre} camina`;
    }
    comer() {
        return "El animal come";
    }
}

class Perro extends Animales {
    constructor(nombre){
        super(nombre);
        this.tipo = 'perro';
    }
}

let obj = new Perro('Lucas');
console.log(obj.caminar())
