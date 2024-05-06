<?php
// Include the database connection file
require_once "db_connection.php";


$sql = "SELECT * FROM users WHERE type = 'admin'";
                $result = $conn->query($sql); 
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo ' <tr>
                        <td>'.$row["SSN"].'</td>
                        <td>'.$row["name"].'</td>
                        <td>'.$row["email"].'</td>
                        <td>'.$row["username"].'</td>
                        <td>'.$row["dateOfBirth"].'</td>
                        </tr>';
                    }
                }

?>