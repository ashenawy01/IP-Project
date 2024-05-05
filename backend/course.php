<?php
// Include the database connection file
require_once "db_connection.php";

class Course {
    // Method to save a new course
    public static function save($title, $description, $teacher_id) {
        global $conn;

        $sql = "INSERT INTO course (title, description, teacher_id) VALUES (?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssi", $title, $description, $teacher_id);

        if ($stmt->execute() === TRUE) {
            return "New course created successfully";
        } else {
            throw new Exception("Error: " . $stmt->error);
        }

        $stmt->close();
    }

    // Method to update a course
    public static function update($course_id, $title, $description, $teacher_id) {
        global $conn;

        $sql = "UPDATE course SET title = ?, description = ?, teacher_id = ? WHERE course_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssii", $title, $description, $teacher_id, $course_id);

        if ($stmt->execute() === TRUE) {
            return "Course updated successfully";
        } else {
            throw new Exception("Error: " . $stmt->error);
        }

        $stmt->close();
    }

    // Method to delete a course
    public static function delete($course_id) {
        global $conn;

        $sql = "DELETE FROM course WHERE course_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $course_id);

        if ($stmt->execute() === TRUE) {
            return "Course deleted successfully";
        } else {
            throw new Exception("Error: " . $stmt->error);
        }

        $stmt->close();
    }

    // Method to fetch all courses
    public static function findAll() {
        global $conn;

        $sql = "SELECT * FROM course";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $courses = [];
            while ($row = $result->fetch_assoc()) {
                $courses[] = $row;
            }
            return $courses;
        } else {
            return [];
        }
    }

    // Method to search for courses by title
    public static function searchByTitle($title) {
        global $conn;

        $sql = "SELECT * FROM course WHERE title LIKE ?";
        $stmt = $conn->prepare($sql);
        $title = "%{$title}%"; // Adding wildcards for partial matching
        $stmt->bind_param("s", $title);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $courses = [];
            while ($row = $result->fetch_assoc()) {
                $courses[] = $row;
            }
            return $courses;
        } else {
            return [];
        }

        $stmt->close();
    }
}
?>
