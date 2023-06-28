let promesa1 = new Promise((resolve, reject)=> {
    resolve("Somos programadores, hacemos mover el mundo.")
})

promesa1.then((res) => {
    console.log(res);
})

