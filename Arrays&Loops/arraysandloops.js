var countries = ["India", "USA", "Japan","Russia"];

var states = ["Ap","Ts","Goa","Maharastra"];

console.log(states);

console.log(states[1]);

console.log(states.length);

states[0] = "Punjab";

console.log(states);


var user = ["santhosh", "santhosh@gmail.com",3,34,true];
console.log(user);

// Pop will removes the last data in an array
user.pop();
console.log(user);

// to add  a new value in an array
user.unshift("New name");
console.log(user);

// to remove the added value using unshit
user.shift();
console.log(user);

//Index of value numbers ,name by searching
console.log(user.indexOf(3));
console.log(user.indexOf("santhosh"));

// To find out of the array values will gives the result -1
console.log(user.indexOf("newyy"));

// Aray of values
console.log(Array.from ("Santhosh"));