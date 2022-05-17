// Show user a signout button if he is authenticated or loggedin
// Other wise show him option login/signup

var authenticated = true;

// if (authenticated) {
//     console.log("Show Signout Button");
// }else {
//     console.log("Show Login Button");
// }

authenticated ? console.log ("Signout Button") : console.log("Login Button");
//                            true if part     :  False else part will shown in condition;