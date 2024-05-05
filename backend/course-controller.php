<?php

// Set the appropriate CORS headers
header("Access-Control-Allow-Origin: *"); // Allow requests from any origin
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE"); // Allow the specified methods
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"); // Allow the specified headers


// Include the Course class file
require_once "course.php";

// Function to handle incoming requests
function handleRequest() {
    $action = $_GET["action"] ?? null;

    switch ($action) {
        case "create":
            createCourse();
            break;
        case "update":
            updateCourse();
            break;
        case "delete":
            deleteCourse();
            break;
        case "search":
            searchCourse();
            break;
        case "getAll":
            getAllCourses();
            break;
        default:
            echo "Invalid action";
            break;
    }
}

// Function to create a new course
function createCourse() {
    $title = $_POST["title"];
    $description = $_POST["description"];
    $teacher_id = $_POST["teacher_id"];

    try {
        $result = Course::save($title, $description, $teacher_id);
        echo $result;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Function to update an existing course
function updateCourse() {
    $course_id = $_POST["course_id"];
    $title = $_POST["title"];
    $description = $_POST["description"];
    $teacher_id = $_POST["teacher_id"];

    try {
        $result = Course::update($course_id, $title, $description, $teacher_id);
        echo $result;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Function to delete a course
function deleteCourse() {
    $course_id = $_POST["course_id"];

    try {
        $result = Course::delete($course_id);
        echo $result;
    } catch (Exception $e) {
        echo "Error: " . $e->getMessage();
    }
}

// Function to search for courses by title
function searchCourse() {
    $title = $_GET["title"];

    $courses = Course::searchByTitle($title);
    echo json_encode($courses);
}

// Function to get all courses
function getAllCourses() {
    $courses = Course::findAll();
    echo json_encode($courses);
}

// Handle the incoming request
handleRequest();
?>
