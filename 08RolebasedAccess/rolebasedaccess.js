// Create an application with following roles
// Admin - Get full access
// Subadmin - Get access to create or delete courses
// Testprep - gets access to create or delete tests
// user - gets access to consume content

var user = "subadmin";

switch (user) {
    case "admin":
        console.log("Get full access");
        break;

    case "subadmin":
        console.log("Get access to create or delete courses");
        break;

    case "testprep":
        console.log("gets access to create or delete tests");
        break;

    case "user":
        console.log("gets access to consume content");
        break;

    default:
        console.log("Trial User");
        break;
}





var user = "admin";

switch (user) {
    case "admin":
        console.log ("you r the admin");
        break;

    default:
        break;
}


var employee = "bhanu";

switch (employee) {
    case "santhosh":
        console.log("Santhosh is a Front end developer");
        break;

        case "anirudh": 
        console.log ("Anirudh is tester");
        break;

        case "bhanu": 
        console.log ("Bhanu is Product owner");
        break;

        case "pavan": 
        console.log ("Pavan is Datascientist");
        break;
        

    default:
        console.log ("Trial version");
        break;
}