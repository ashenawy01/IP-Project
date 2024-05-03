<?php
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
