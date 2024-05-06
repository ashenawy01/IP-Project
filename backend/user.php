<?php
// Include the database connection file
require_once "db_connection.php";

class User {
    public $user_id;
    public $password;
    public $email;
    public $user_type;
    public $firstName;
    public $lastName;
    public $image; 

    // Constructor
    public function __construct($user_id, $password, $email, $user_type, $firstName, $lastName, $image) {
        $this->user_id = $user_id;
        $this->password = $password;
        $this->email = $email;
        $this->user_type = $user_type;
        $this->firstName = $firstName;
        $this->lastName = $lastName;
        $this->image = $image; 
    }

    // Method to save a user to the database
    public function save() {
        global $conn; // Use the existing database connection

        // Insert user into the database
        $sql = "INSERT INTO sys_user (password, email, user_type, first_name, last_name, image) VALUES (?, ?, ?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssss", $this->password, $this->email, $this->user_type, $this->firstName, $this->lastName, $this->image);

        if ($stmt->execute() === TRUE) {
            echo "New record created successfully";
        } else {
            throw new Exception("Error: " . $stmt->error);
        }

        $stmt->close();
    }


    // Method to retrieve a user from the database by username
    public static function findByUsername($username) {
        global $conn; // Use the existing database connection

        $sql = "SELECT * FROM sys_user WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $username);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return array("user" => new User($row["user_id"], $row["password"], $row["email"], $row["user_type"], $row["first_name"], $row["last_name"], $row["image"]), "email" => $row["email"]);
        } else {
            return null;
        }

        $stmt->close();
    }
}
?>