<?php
require_once "db_connection.php";

class Enrollment {
    // Method to save a new enrollment
    public static function addEnrollment($name, $phone) {
        global $conn;

        $sql = "INSERT INTO enrollments (name, phone) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ss", $name, $phone);

        if ($stmt->execute()) {
            return "Enrollment added successfully";
        } else {
            throw new Exception("Error: " . $stmt->error);
        }

        $stmt->close();
    }

    // Method to remove an enrollment
    public static function removeEnrollment($id) {
        global $conn;

        $sql = "DELETE FROM enrollments WHERE id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $id);

        if ($stmt->execute()) {
            return "Enrollment removed successfully";
        } else {
            throw new Exception("Error: " . $stmt->error);
        }

        $stmt->close();
    }
}

// Handling form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    try {
        $response = Enrollment::addEnrollment($name, $phone);
        echo $response;
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}
?>
