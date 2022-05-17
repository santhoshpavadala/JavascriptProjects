// User is only allowed to make a purchase when he is 
// logged in
// email verified
// cardinfo-ValidityState
// if anyone is miising stop purchase

var isLoggedIn = true;
var isEmailVerified = true;
var cardInfo = true;

// if (isLoggedIn) {
//     console.log("Login is successful");
//     if (isEmailVerified) {
//         console.log("Your Email is verified");
//         if (cardInfo) {
//             console.log("You can go for purchase");
//         }
//     }
// }

// AND Operator && - ALL VALUES ARE TRUE THEN ONLY CONDITION APPLIES OTHERWISE WILL GOES TO ELSE CONDITION
// OR Operator || - ANY ONE VALUE IS TRUE THEN ONLY CONDITION APPLIES OTHERWISE WILL GOES TO ELSE CONDITION
if (isLoggedIn && isEmailVerified && cardInfo ) {
    console.log("Allow user to make purchase");
}else {
    console.log("You are NOT allowed to Purchase");
}