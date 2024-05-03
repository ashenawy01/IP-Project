<?php
// Include the User class and database connection file
require_once "User.php";
require_once "db_connection.php";

// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $firstName = $_POST["firstname"];
    $lastName = $_POST["lastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $confirmPassword = $_POST["confirm-password"];
    $userType = "student"; // Assuming all signups are for students initially

    // Check if passwords match
    if ($password !== $confirmPassword) {
        echo "Error: Passwords do not match.";
        exit();
    }

    // // Hash the password
    // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Handle file upload
    if (isset($_FILES["profile-image"])) {
        $file = $_FILES["profile-image"];

        // Check if file upload error occurred
        if ($file["error"] !== UPLOAD_ERR_OK) {
            echo "Error uploading profile image.";
            exit();
        }

        // Generate a unique name for the uploaded file
        $imageName = uniqid() . '_' . $file["name"];

        // Move the uploaded file to the desired directory
        $uploadPath = "assets/images/" . $imageName;
        if (!move_uploaded_file($file["tmp_name"], $uploadPath)) {
            echo "Error moving uploaded file.";
            exit();
        }
    } else {
        // No profile image uploaded
        $imageName = "";
    }

    // Create a new user object
    $user = new User(null, $password, $email, $userType, $firstName, $lastName, $imageName);

    try {
        // Save the user to the database
        $user->save();
        echo "User registered successfully";
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}
?>
