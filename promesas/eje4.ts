let promesa12 = new Promise((resolve, reject) => {
    resolve(2);
})

promesa12.then((res: any) => {
    console.log(res);
    return res *res;
}).then((res) => {
    console.log(res);
    return res*res;
}).then((res) => {
    console.log(res);
    return res*res;
}).then((res) => {
    console.log("el resultado es "+ res);
    return res;
}).catch((err) => {
    console.log(err.message);
})