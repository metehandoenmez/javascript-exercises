function printAsync(callback, name) {
setTimeout(() => {
    callback();
}, 1000);
setTimeout(() => {
    console.log(name)
}, 2000);
}

function cbfunc1() {
    console.log("Hello");
}

printAsync(cbfunc1, "Mete")