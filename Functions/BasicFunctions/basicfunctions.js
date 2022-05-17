function sayHello() {
    console.log("Hello there, Santhosh");
}

// bringing 2 Time Ranges
sayHello(); 
// -for calling function
sayHello (); 
// sayHello - for refferenring function



// Example - 2
function sayHello(name) {
    console.log("Hello there,", name);
}
sayHello("Santhosh");
sayHello("Lucky");


// Example - 3
function sanHello(name) {
console.log(`Hello there, ${name}. How r u?`);
}
sanHello("Santhu");
sanHello("San");

// Examole - 4
function sanHi() {
    return "Hello in india";
}
var greetings = sanHi();
console.log(greetings);
console.log(sanHi());





// Practice
// ex1
function myName() {
    console.log("My name is ...")
}
myName();
// ex2
function sayHello(name) {
    console.log ("hello there im,",  name);
    
}
sayHello ("Santhosh");
// ex3
function myFunction(name) {
    console.log(`hey this is ${name}`);
}
myFunction("Santhosh");

// ex4
function namasthey() {
    return "hello india";
}
// returns only retuns but willnot prints,
namasthey();
// you can store the value in var let it prints
var greetings = namasthey();
console.log (greetings);
console.log (namasthey());


function name(params) {
    
}