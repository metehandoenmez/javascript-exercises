const number = 15;

let greater = new Promise((resolve, reject) => {
    if (number > 10) {
        resolve(number);
    }
    else {
        reject(new Error())
    }
})

greater
.then((result) => {console.log(result);})
.catch((error) => {console.error(error);})