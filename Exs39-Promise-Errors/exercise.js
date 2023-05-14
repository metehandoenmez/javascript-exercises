const isLogged = true;

let promise1 = (isLogged) => {
    return new Promise((resolve, reject) => {
        if (isLogged) {
            let random = Math.random();
            resolve(random)
        }
        else {
            reject(new Error("Logged in = false"));
        }
})
};

let promise2 = (number) => {
    return new Promise((resolve, reject) => {
        if(number > 0.5) {
            resolve({name: "John",age:24})
        }
        else {
            reject(new Error())
        }
    })
}

promise1(isLogged)
.then((random) => {
return promise2(random);
})
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})