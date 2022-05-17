// Falsy values
// undefined
// null
// 0
// ''
// NaN

var user = "NaN";
if (user) {
    console.log("Condition is true");
}


console.log(2 + 2);
console.log(2 + "2");
console.log("2" + 2);

var user = "2";

// == --> === stricytly checks condition of string and values that not are equals
if (2 === user) {
    console.log("Condition is true");
}
