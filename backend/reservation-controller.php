<?php
// Include the Reservation class
require_once "Reservation.php";

// Set the appropriate CORS headers
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); // Allow the specified methods
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); // Allow the specified headers

// Check the request method
$method = $_SERVER["REQUEST_METHOD"];

switch ($method) {
    case "GET":
        // Handle GET request
        $action = isset($_GET["action"]) ? $_GET["action"] : null;
        if ($action === "getAll") {
            // Retrieve all reservations
            $reservations = Reservation::findAll();
            echo json_encode($reservations);
        } elseif ($action === "getById") {
            // Retrieve reservation by ID
            $reservation_id = isset($_GET["reservation_id"]) ? $_GET["reservation_id"] : null;
            if ($reservation_id !== null) {
                $reservation = Reservation::findById($reservation_id);
                if ($reservation !== null) {
                    echo json_encode($reservation);
                } else {
                    http_response_code(404); // Not Found
                    echo json_encode(array("message" => "Reservation not found."));
                }
            } else {
                http_response_code(400); // Bad Request
                echo json_encode(array("message" => "Missing reservation ID."));
            }
        } else {
            http_response_code(400); // Bad Request
            echo json_encode(array("message" => "Invalid action."));
        }
        break;
    case "POST":
        // Handle POST request
        $data = json_decode(file_get_contents("php://input"));

        // Check if required fields are provided
        if (
            !empty($data->course_id) &&
            !empty($data->student_id) &&
            !empty($data->date) &&
            !empty($data->status) &&
            !empty($data->note)
        ) {
            // Create a new reservation object
            $reservation = new Reservation($data->course_id, $data->student_id, $data->date, $data->status, $data->note);

            try {
                // Save the reservation
                $message = $reservation->save();
                http_response_code(201); // Created
                echo json_encode(array("message" => $message));
            } catch (Exception $e) {
                http_response_code(500); // Internal Server Error
                echo json_encode(array("message" => "Error: " . $e->getMessage()));
            }
        } else {
            http_response_code(400); // Bad Request
            echo json_encode(array("message" => "Missing required fields."));
        }
        break;
    default:
        http_response_code(405); // Method Not Allowed
        echo json_encode(array("message" => "Method not allowed."));
}
?>
