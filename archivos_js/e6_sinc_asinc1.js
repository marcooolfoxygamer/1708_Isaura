function f1(){
    console.log("func 1");
}
function f2(){
    f1();
    console.log("func 2");
}
function f3(){
    f2();
    console.log("func 3");
}
f3();
