let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access Level:", accessLevel);

let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";    
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User Message: ", userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break
    case "manager":
        userCategory = "Manager";
        break
    case "subscriber":
        userCategory = "Subscriber";
        break
    default:
        userCategory = "Unknown";
}

console.log("User Category: ", userCategory);

let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log("Authentication Status:", authenticationStatus);

// Dietary Services Starts

let user = "man";
let service;

if (user === "employee") {
    service = "Allow to use Dietary Services but no one-on-one interaction with a dietician";
} else if (user === "enrolled-member") {
    service = "Allow to use Dietary Services and one-on-one interaction with a dietician";
} else if (user === "subscriber") {
    service = "Allow to use Dietary Services but partial access";
} else if (user === "non-subscriber") {
    service = "Please enroll or at least subscribe first to avail this facility";
} else {
    service = "Please select a role";
}

console.log(service);

// Dietary Services Ends