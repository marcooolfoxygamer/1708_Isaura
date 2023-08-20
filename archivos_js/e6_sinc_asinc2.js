function impresion() {
    console.log("impresion asincrónica");
}
function antes() {
    console.log("anterior");
}

setTimeout(impresion, 2000);
antes();
