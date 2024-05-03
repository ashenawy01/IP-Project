<?php
// Include the database connection file
$servername = "localhost";
$username = "root";
$password = "";
$database = "coursesdb"; 

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";

// Close the database connection
$conn->close();
?>
