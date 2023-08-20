const fun_callback = (num1, num2, callback) => {
    const resultado = num1 + num2
    return setTimeout(() => {
        callback(resultado)
    }, 2000)
}

fun_callback(2, 2, (resp) => {
    console.log(resp)
})
