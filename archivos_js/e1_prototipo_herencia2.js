let Animales_obj = {
    come: true,
    caminar() {
        return `El animal ${this.tipo} camina`;
    }
};
let perro_obj = {
    ladra: true,
    tipo: 'perro',
    __proto__: Animales_obj
};
let gato_obj = {
    maullar: true,
    tipo: 'gato',
    __proto__: Animales_obj
};

console.log(perro_obj.caminar());
console.log(gato_obj.caminar());
