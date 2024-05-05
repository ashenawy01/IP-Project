<?php


// Set the appropriate CORS headers
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); // Allow the specified methods
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); // Allow the specified headers

// Include the User class and database connection file
require_once "User.php";
require_once "db_connection.php";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Authenticate user
    $userData = User::findByUsername($username);
    // echo "input password , " . $password . " input Username , " .$username;

    
    if ($userData && $password === $userData["user"]->password) {
        // User authenticated, echo first name and last name
        echo "Welcome, " . $userData["user"]->firstName . " " . $userData["user"]->lastName;
    } else {
        // Authentication failed, display error message
        echo "User not found.";
    }
}
?>
