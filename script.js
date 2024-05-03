$(document).ready(function () {
  // Example data - replace with actual data fetch
  var courses = [
    {
      title: "Web Development",
      description: "Learn to build websites.",
      image: "assets/images/web-development.jpg",
      price: "$99",
      id: "web-development",
      data: "2020-01-01",
    },
    {
      title: "Data Science",
      description: "Analyze data effectively.",
      image: "assets/images/data-science.jpg",
      price: "$120",
      id: "data-science",
      data: "2020-01-01",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$80",
      id: "digital-marketing1",
      data: "2020-01-01",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$80",
      id: "digital-marketing2",
      data: "2020-01-01",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$800",
      id: "digital-marketing3",
      data: "2020-01-01",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$810",
      id: "digital-marketing4",
      data: "2020-01-01",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$820",
      id: "digital-marketing5",
      data: "2020-01-01",
    },
  ];
  var defaultImage = "assets/images/default-avatar.jpeg";
  courses.forEach(function (course) {
    var courseImage = course.image || defaultImage;
    $(".courses-container").append(
      '<div class="course">' +
        '<img src="' +
        courseImage +
        '" alt="' +
        course.title +
        '" onerror="this.onerror=null;this.src=\'' +
        defaultImage +
        "';\">" +
        "<h3>" +
        course.title +
        "</h3>" +
        "<p>" +
        course.description +
        "</p>" +
        "<p>" +
        course.data +
        "</p>" +
        '<p class="course-price">' +
        course.price +
        "</p>" +
        '<a href="buy-course.html?course=' +
        course.id +
        '" class="btn buy-btn">Book Coures Now</a>' +
        "</div>"
    );
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

// document.addEventListener("DOMContentLoaded", function () {
//   var loginForm = document.getElementById("login-form");

//   loginForm.addEventListener("submit", function (event) {
//     // Prevent form submission for demonstration
//     event.preventDefault();

//     var usernameEmail = document.getElementById("username-email").value;
//     var password = document.getElementById("password-login").value;

//     // Clear previous errors
//     document.getElementById("username-email-error").textContent = "";
//     document.getElementById("password-login-error").textContent = "";

//     // Simple validation logic
//     if (usernameEmail.length === 0) {
//       document.getElementById("username-email-error").textContent =
//         "Please enter your username or email.";
//       return false; // Stop submission
//     }

//     if (password.length < 6) {
//       document.getElementById("password-login-error").textContent =
//         "Password must be at least 6 characters long.";
//       return false; // Stop submission
//     }

//     // If validation passes, proceed with form submission (here you would typically submit the form)
//     console.log("Validation passed. Form can be submitted now.");
//   });
// });

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