drop if exists database coursesdb;
create database coursesdb;
use coursesdb;
-- Table: user
CREATE TABLE sys_user (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
	first_name VARCHAR(50),
    last_name VARCHAR(50),
	email VARCHAR(100),
    password VARCHAR(50) NOT NULL,
    image VARCHAR(100),
    user_type ENUM('student', 'teacher') NOT NULL
);

-- Table: student
CREATE TABLE student (
    student_id INT PRIMARY KEY,
    user_id INT,
    country VARCHAR(50),
    city VARCHAR(50),
    address VARCHAR(100),
    phone VARCHAR(20),
    FOREIGN KEY (user_id) REFERENCES sys_user(user_id)
);

-- Table: teacher
CREATE TABLE teacher (
    teacher_id INT PRIMARY KEY,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES sys_user(user_id)
);

-- Table: course
CREATE TABLE course (
    course_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    teacher_id INT,
    FOREIGN KEY (teacher_id) REFERENCES teacher(teacher_id)
);

-- Table: course_group
CREATE TABLE course_group (
    group_id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT,
    title VARCHAR(100) NOT NULL,
    capacity INT,
    FOREIGN KEY (course_id) REFERENCES course(course_id)
);

-- Table: group_schedule
CREATE TABLE group_schedule (
    schedule_id INT AUTO_INCREMENT PRIMARY KEY,
    group_id INT,
    weekday ENUM('monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday') NOT NULL,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL,
    FOREIGN KEY (group_id) REFERENCES course_group(group_id)
);

-- Table: reservation
CREATE TABLE reservation (
    reservation_id INT AUTO_INCREMENT PRIMARY KEY,
    student_id INT,
    group_id INT,
    status ENUM('pending', 'completed', 'declined', 'canceled'),
    FOREIGN KEY (student_id) REFERENCES student(student_id),
    FOREIGN KEY (group_id) REFERENCES course_group(group_id)
);

-- Additional related tables if needed

-- Table: payment
CREATE TABLE payment (
    payment_id INT AUTO_INCREMENT PRIMARY KEY,
    reservation_id INT,
    amount DECIMAL(10, 2),
    payment_date DATETIME,
    FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id)
);


-- Table: feedback
CREATE TABLE feedback (
    feedback_id INT AUTO_INCREMENT PRIMARY KEY,
    reservation_id INT,
    comment TEXT,
    rating INT,
    FOREIGN KEY (reservation_id) REFERENCES reservation(reservation_id)
);

-- Add any other related tables as needed


