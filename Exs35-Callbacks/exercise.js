function repeatHello(callback) {
    setInterval(callback , 1000);
    }
    
    let cbfunc = () => {
        console.log("Hello");
    }
    
    repeatHello(cbfunc);



/* function repeatHello(callback) {
setInterval(() => {
    callback(); 
}, 1000);
}

function cbfunc() {
    console.log("Hello");
}

repeatHello(cbfunc); */

//setInterval takes an arrow function as its argument in this case to ensure that
//the this value within the function remains the same even if the function is executed
//in a different context like setInterval. Arrow functions inherit the this value from
//the parent scope where they were defined, which can help avoid potential issues with this binding.