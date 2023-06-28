"use strict";
//promesa que siempre se cumple con valor 10
let promesa12 = new Promise((resolve, reject) => {
    resolve(20);
});
promesa12.then((res) => {
    console.log(res);
    return res + 10;
}).then((res) => {
    console.log(res);
    return res + 50;
}).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.message);
});
