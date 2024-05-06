<?php
// Include the database connection file
require_once "db_connection.php";

class Reservation {
    public $reservation_id;
    public $course_id;
    public $student_id;
    public $date;
    public $note;
    public $status;

    // Constructor
    public function __construct($course_id, $student_id, $date, $note = "", $status = "pending") {
        $this->course_id = $course_id;
        $this->student_id = $student_id;
        $this->date = $date;
        $this->note = $note;
        $this->status = $status;
    }

    // Method to save a new reservation to the database
// Method to save a new reservation to the database
public function save() {
    global $conn; // Use the existing database connection

    // Insert reservation into the database
    $sql = "INSERT INTO reservations (course_id, student_id, date, note, status) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("iisss", $this->course_id, $this->student_id, $this->date, $this->note, $this->status);

    if ($stmt->execute() === TRUE) {
        $stmt->close(); // Close the statement
        return "New reservation created successfully";
    } else {
        throw new Exception("Error: " . $stmt->error);
    }
}


    // Method to retrieve all reservations from the database
    public static function findAll() {
        global $conn; // Use the existing database connection

        $reservations = array();

        $sql = "SELECT * FROM reservations";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                $reservation = new Reservation($row["course_id"], $row["student_id"], $row["date"], $row["note"], $row["status"]);
                $reservation->reservation_id = $row["reservation_id"];
                $reservations[] = $reservation;
            }
        }

        return $reservations;
    }

    // Method to find a reservation by ID
    public static function findById($reservation_id) {
        global $conn; // Use the existing database connection

        $sql = "SELECT * FROM reservations WHERE reservation_id = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("i", $reservation_id);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows == 1) {
            $row = $result->fetch_assoc();
            $reservation = new Reservation($row["course_id"], $row["student_id"], $row["date"], $row["note"], $row["status"]);
            $reservation->reservation_id = $row["reservation_id"];
            return $reservation;
        } else {
            return null;
        }

        $stmt->close();
    }
}
?>
