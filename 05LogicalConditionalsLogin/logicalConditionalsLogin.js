
var email = true;
var facebook = false;
var google = false;

// OR OPERATOR || - Any one is true, condition applies otherwise goes to else condition
if (email || facebook || google) {
    console.log("Login Successfully");
}else {
    console.log("You must login anyone");
}