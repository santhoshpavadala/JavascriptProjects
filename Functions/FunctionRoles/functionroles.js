// var getUserRoles = function (name, role) {  You can also write
function getUserRoles (name , role) {
    switch (role) {
        case "admin":
            return `${name} Has the all access`;
            break;     
            // break is not neccesary
        case "subadmin":
        return `${name} Has the with access to create and delete courses `;
        break;

        case "testpreps":
        return `${name} Has the all access the tests`;
        break;

        case "user":
        return `${name} Has the all access the data`;
        break;
    
        default:
            return `${name} is a trial user`;
            break;
    }
}

console.log(getUserRoles("Santhosh", "admin"));

var getRole = getUserRoles ("sammy", "user");
console.log(getRole);