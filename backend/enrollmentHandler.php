<?php
require_once 'db_connection.php';

class Enrollment {
    public static function addEnrollment($name, $phone) {
        global $conn;

        $sql = "INSERT INTO enrollments (name, phone) VALUES (?, ?)";
        $stmt = $conn->prepare($sql);
        if (!$stmt) {
            die('MySQL prepare error: ' . $conn->error);
        }

        $stmt->bind_param('ss', $name, $phone);

        if ($stmt->execute()) {
            echo "Enrollment added successfully!";
        } else {
            echo "Error adding enrollment: " . $stmt->error;
        }

        $stmt->close();
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';

    Enrollment::addEnrollment($name, $phone);
}
?>
