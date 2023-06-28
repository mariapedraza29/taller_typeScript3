"use strict";
let promesas2 = new Promise((resolve, reject) => {
    reject(Error("Ha ocurrido un error desconocido"));
});
promesas2.catch((err) => {
    console.log(err.message);
});
