const numeros = new Map();

numeros.set("uno",{"numero":1});
numeros.set("dos",{"numero":2});
numeros.set("tres",{"numero":3});
numeros.set("cuatro",{"numero":4});

console.log(numeros);
console.log(numeros.get("dos"),"\n");

// Metodo de array

const arreglo = [1,2,3,4];
const map_arr = arreglo.map((x) => x * 2);
console.log(map_arr);
