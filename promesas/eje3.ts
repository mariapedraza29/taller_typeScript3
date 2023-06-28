let estrato = 20;
let promesa3 = new Promise((resolve, reject) => {
        if (estrato >= 1 && estrato<=6){
        resolve("La persona tiene derecho al subsidio");
        }
    reject(new Error('Estrato no valido'));
    
    
})
promesa3.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
})