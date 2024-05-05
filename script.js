$(document).ready(function () {
  // AJAX request to fetch course data from the controller
  $.ajax({
    url: "http://localhost/reservationapp/backend/course-controller.php?action=getAll",
    method: "GET",
    dataType: "json",
    success: function (response) {
      // Check if data is received successfully
      if (response && response.length > 0) {
        // Loop through each course and append it to the courses container
        response.forEach(function (course) {
          var courseImage = course.image || "assets/images/default-avatar.jpeg";
          $(".courses-container").append(
            '<div class="course">' +
              '<img src="' + courseImage + '" alt="' + course.title + '">' +
              '<h3>' + course.title + '</h3>' +
              '<p>' + course.description + '</p>' +
              '<p>' + course.data + '</p>' +
              '<p class="course-price">' + course.price + '</p>' +
              '<a href="buy-course.html?course=' + course.id + '" class="btn buy-btn">Book Course Now</a>' +
              '</div>'
          );
        });
      } else {
        // Display a message if no courses are found
        $(".courses-container").html("<p>No courses found.</p>");
      }
    },
    error: function (xhr, status, error) {
      // Display error message if request fails
      console.error("Error fetching course data:", error);
      $(".courses-container").html("<p>Error fetching course data.</p>");
    }
  });
});



$(document).ready(function () {
  // Your existing code to load courses...

  var scrollAmount = 300; // Adjust based on your layout

  $(".right-arrow").click(function () {
    $(".courses-container").animate(
      {
        scrollLeft: "+=" + scrollAmount,
      },
      "slow"
    );
  });

  $(".left-arrow").click(function () {
    $(".courses-container").animate(
      {
        scrollLeft: "-=" + scrollAmount,
      },
      "slow"
    );
  });
});

$(document).ready(function() {
  var courses = [
      { title: "Web Development", description: "Learn to build websites.", price: "$99", courseImage: "assets/images/webdevelopment.jpg",data: "Data Science", id: 1 },
      { title: "Data Science", description: "Analyze data effectively.", price: "$120",courseImage: "assets/images/datascience.jpg",data: "Web Development", id: 2 },
      { title: "Digital Marketing", description: "Market products online.", price: "$80",courseImage: "assets/images/digitalmarketing.jpg",data: "Data Science", id: 3 },
      // More courses
  ];

  function renderCourses() {
      $('.course-cards').empty(); // Clear existing cards
      courses.forEach(function (course) {
        var courseImage = course.image || "assets/images/default-avatar.jpeg";
        $(".courses-container").append(
          '<div class="course">' +
            '<img src="' + courseImage + '" alt="' + course.title + '">' +
            '<h3>' + course.title + '</h3>' +
            '<p>' + course.description + '</p>' +
            '<p>' + course.data + '</p>' +
            '<p class="course-price">' + course.price + '</p>' +
            '<a href="buy-course.html?course=' + course.id + '" class="btn buy-btn">Book Course Now</a>' +
            '</div>'
        );
      });
  }

  $('#course-search').on('input', function() {
      var searchText = $(this).val().toLowerCase();
      var filteredCourses = courses.filter(function(course) {
          return course.title.toLowerCase().includes(searchText) ||
                 course.description.toLowerCase().includes(searchText);
      });
      $('.course-cards').empty(); // Clear existing cards
      filteredCourses.forEach(function(course) {
          var cardHtml = '<div class="course-card">' +
              '<h3>' + course.title + '</h3>' +
              '<p>' + course.description + '</p>' +
              '<p class="course-price">' + course.price + '</p>' +
          '</div>';
          $('.course-cards').append(cardHtml);
      });
  });

  renderCourses(); // Initial render
});


document.addEventListener("DOMContentLoaded", function () {
  var signupForm = document.getElementById("signup-form");

  signupForm.addEventListener("submit", function (event) {
    // Initially, no errors
    var hasErrors = false;

    // Clear previous error messages
    document.querySelectorAll(".error-message").forEach(function (el) {
      el.textContent = ""; // Clear any existing errors
    });
    document.getElementById("terms-error").textContent = "";
    passwordError.textContent = "";
    profileImageError.textContent = "";
    var termsChecked = document.getElementById("terms").checked;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var passwordError = document.getElementById("password-error");
    var confirmPassword = document.getElementById("confirm-password").value;
    var profileImage = document.getElementById("profile-image").files;
    var profileImageError = document.getElementById("profile-image-error");

    var passwordPattern =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Username validation
    if (username.length < 5) {
      document.getElementById("username-error").textContent =
        "Username must be at least 5 characters long.";
      hasErrors = true;
    }

    // Email validation
    if (!/\S+@\S+\.\S+/.test(email)) {
      document.getElementById("email-error").textContent =
        "Please enter a valid email address.";
      hasErrors = true;
    }

    // Password matching
    if (password !== confirmPassword) {
      document.getElementById("confirm-password-error").textContent =
        "Passwords do not match.";
      hasErrors = true;
    }

    if (hasErrors) {
      event.preventDefault(); // Stop form from submitting
    }
    if (!termsChecked) {
      document.getElementById("terms-error").textContent =
        "You must accept the terms and conditions to sign up.";
      event.preventDefault(); // Prevent form submission
    }
    if (!passwordPattern.test(password)) {
      passwordError.textContent =
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
      event.preventDefault(); // Prevent form submission
    }
    if (profileImage.length === 0) {
      profileImageError.textContent = "Please upload a profile image.";
      event.preventDefault(); // Prevent form submission
    }
    // If no errors, form will submit normally
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var profileImageInput = document.getElementById("profile-image");

  profileImageInput.addEventListener("change", function () {
    var fileName =
      profileImageInput.files.length > 0 ? profileImageInput.files[0].name : "";
    document.getElementById("file-name").textContent = fileName;
  });

  // Your existing form submission and validation script...
});

document.addEventListener("DOMContentLoaded", function () {
  var loginForm = document.getElementById("login-form");

  loginForm.addEventListener("submit", function (event) {
    // Prevent form submission for demonstration
    event.preventDefault();

    var usernameEmail = document.getElementById("username-email").value;
    var password = document.getElementById("password-login").value;

    // Clear previous errors
    document.getElementById("username-email-error").textContent = "";
    document.getElementById("password-login-error").textContent = "";

    // Simple validation logic
    if (usernameEmail.length === 0) {
      document.getElementById("username-email-error").textContent =
        "Please enter your username or email.";
      return false; // Stop submission
    }

    if (password.length < 6) {
      document.getElementById("password-login-error").textContent =
        "Password must be at least 6 characters long.";
      return false; // Stop submission
    }

    // If validation passes, proceed with form submission (here you would typically submit the form)
    console.log("Validation passed. Form can be submitted now.");
    
    // Prepare data for sending
    var formData = {
      username: usernameEmail,
      password: password
    };
    
    console.log(formData);
    // AJAX request to backend
    fetch('http://localhost/reservationapp/backend/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded', 
      },
    body: formData
  })
  .then(response => 
    // response.text()
    console.log(response)
  )
.then(data => {
  console.log(data);
    if (data === "Login successful!") {
          window.location.href = 'dashboard.html'; // Redirect to dashboard if login is successful
      } else {
            document.getElementById("password-login-error").textContent = data; // Display error from server
        }
    })
    .catch(error => {
      console.error('Error:', error);
      document.getElementById("password-login-error").textContent = "An error occurred. Please try again later.";
    });
});
});

$(document).ready(function() {
  $('#loginForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission

      var formData = $(this).serialize(); // Serialize form data

      $.ajax({
          type: 'POST',
          url: $(this).attr('action'),
          data: formData,
          success: function(response) {
              $('#loginResult').html(response); // Display the backend response
          },
          error: function() {
              $('#loginResult').html('Error processing your request');
          }
      });
  });
});




$(document).ready(function () {
  // Dummy data - replace with actual data fetch from your backend
  var data = {
    courses: 120,
    reservations: 320,
    students: 1500,
    income: "$50,000",
  };

  // Update card values
  $("#total-courses").text(data.courses);
  $("#total-reservations").text(data.reservations);
  $("#total-students").text(data.students);
  $("#total-income").text(data.income);
});

document.addEventListener("DOMContentLoaded", function () {
  // Example data
  var popularCoursesData = {
    labels: ["Web Development", "Data Science", "Digital Marketing"],
    datasets: [
      {
        label: "Enrollments",
        data: [120, 150, 90],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  var incomeCoursesData = {
    labels: ["Web Development", "Data Science", "Digital Marketing"],
    datasets: [
      {
        label: "Income",
        data: [3000, 4500, 2000],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverOffset: 4,
      },
    ],
  };

  var incomeLineChartData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Monthly Income",
        data: [3000, 4000, 2800, 5000, 4500],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
    ],
  };

  new Chart(document.getElementById("popularCoursesPieChart"), {
    type: "pie",
    data: popularCoursesData,
  });

  new Chart(document.getElementById("incomeCoursesPieChart"), {
    type: "pie",
    data: incomeCoursesData,
  });

  new Chart(document.getElementById("incomeLineChart"), {
    type: "line",
    data: incomeLineChartData,
  });
});
document.getElementById('enrollButton').addEventListener('click', function() {
  document.getElementById('enrollmentModal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function() {
  document.getElementById('enrollmentModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  const modal = document.getElementById('enrollmentModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

function saveEnrollment() {
 
  
  alert('Information saved! (placeholder)');
  document.getElementById('enrollmentModal').style.display = 'none';
}
document.querySelectorAll('.star').forEach(star => {
  star.addEventListener('click', (e) => {
    removeRating(); 
    e.target.classList.add('rated'); 
    let previousSibling = e.target.previousElementSibling;
    while (previousSibling) {
      
      previousSibling.classList.add('rated');
      previousSibling = previousSibling.previousElementSibling;
    }
  });
});

function removeRating() {
  document.querySelectorAll('.star').forEach(star => {
    star.classList.remove('rated');
  });
}
$(document).ready(function() {
  
  $('.star').on('click', function() {
    var rating = $(this).data('value');
    updateRating(rating);
  });

  
  loadRatings();

 
});

function updateRating(rating) {
 
  var ratings = JSON.parse(localStorage.getItem('ratings')) || [];
  ratings.push(rating);
  localStorage.setItem('ratings', JSON.stringify(ratings));
  
  
  calculateAndDisplayRating(ratings);
}

function calculateAndDisplayRating(ratings) {
  var total = ratings.reduce(function(acc, cur) { return acc + cur; }, 0);
  var averageRating = (total / ratings.length).toFixed(1);
  var ratingCount = ratings.length;
  
  $('#averageRating').text(averageRating);
  $('#ratingCount').text(ratingCount);
}

function loadRatings() {
  var ratings = JSON.parse(localStorage.getItem('ratings')) || [];
  if (ratings.length > 0) {
    calculateAndDisplayRating(ratings);
  }
}

function saveEnrollment() {
 
}
$(document).ready(function() {

  $('#enrollButton').click(function() {
    $('#enrollmentModal').show();
  });

  $('.close').click(function() {
    $('#enrollmentModal').hide();
  });

  
  $('#enrollmentForm').on('submit', function(e) {
    
    e.preventDefault();

    
    var name = $('#name').val().trim();
    var phone = $('#phone').val().trim();

    
    if(name === "") {
      alert('Please enter your name.');
      return; 
    }
    
    if(phone === "") {
      alert('Please enter your phone number.');
      return;
    }


    console.log('Data saved:', { name: name, phone: phone });
    alert('Information saved successfully!');
    $('#enrollmentModal').hide();
  });
});


// Modal popup functionality



// // AJAX request to handle form submission
// var addCourseForm = document.getElementById("addCourseForm");

// addCourseForm.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission
//   var formData = new FormData(addCourseForm); // Get form data
//   console.log(formData);
//   var xhr = new XMLHttpRequest();
//   xhr.open("POST", "http://localhost/reservationapp/backend/course-controller.php?action=create", true);
//   xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//       if (xhr.status === 200) {
//         // Course added successfully
//         console.log("Course added successfully");
//         modal.style.display = "none"; // Close the modal
//         // You may update the course list here or perform any other actions
//       } else {
//         // Error occurred while adding course
//         console.error("Error adding course:", xhr.responseText);
//         // You may display an error message to the user
//       }
//     }
//   };
//   xhr.send(formData); // Send form data
// });
