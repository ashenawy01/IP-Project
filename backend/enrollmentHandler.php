<?php
require_once 'db_connection.php'; // Ensure this points to your actual database connection script

class Enrollment {
    // Add a new enrollment record to the database
    public static function addEnrollment($name, $phone) {
        global $conn; // Ensure $conn is your database connection variable

        // Prepare an INSERT statement to add enrollment data
        $sql = "INSERT INTO enrollments (name, phone) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die('MySQL prepare error: ' . $conn->error);
        }

        // Bind the input parameters to the prepared statement
        $stmt->bind_param('ss', $name, $phone); // 'ss' denotes two string parameters

        // Execute the statement and check for errors
        if ($stmt->execute()) {
            echo "Enrollment added successfully!";
        } else {
            echo "Error adding enrollment: " . $stmt->error;
        }

        $stmt->close();
    }
}

// Check if the server request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? ''; // Using null coalescing operator to avoid undefined index notice
    $phone = $_POST['phone'] ?? '';

    // Call the addEnrollment function
    Enrollment::addEnrollment($name, $phone);
}
?>
