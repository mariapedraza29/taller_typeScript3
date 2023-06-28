
let promes1 = new Promise((resolve, reject) =>{
    function imprimir() {
        console.log("Somos ADSI");
    }
    setTimeout(imprimir, 4000);
})

promes1.then((res) => {
    console.log("Valor de resolucion: ", res);
}).catch((err) => {
    console.log(err);
})