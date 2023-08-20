function saludo(nombre) {
    let pNombre = nombre.match(/, \w+/);
    pNombre = pNombre[0].replace(/, /g,"");

    let sNombre = nombre.match(/\w+/);
    sNombre = sNombre[0];
    
    return `Bienvenid@ ${pNombre} ${sNombre}`;
}
console.log(saludo("Lopez Rios, Juan Camilo"))
