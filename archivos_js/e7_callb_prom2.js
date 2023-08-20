const fun_prom = (num1, num2) => {
    const resultado = num1 + num2
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(resultado)
        }, 2000)
    })
}

fun_prom(2,2)
    .then(resultado => console.log(resultado))
