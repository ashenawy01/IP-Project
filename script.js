$(document).ready(function () {
  // Example data - replace with actual data fetch
  var courses = [
    {
      title: "Web Development",
      description: "Learn to build websites.",
      image: "assets/images/web-development.jpg",
      price: "$99",
      id: "web-development",
    },
    {
      title: "Data Science",
      description: "Analyze data effectively.",
      image: "assets/images/data-science.jpg",
      price: "$120",
      id: "data-science",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$80",
      id: "digital-marketing1",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$80",
      id: "digital-marketing2",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$800",
      id: "digital-marketing3",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$810",
      id: "digital-marketing4",
    },
    {
      title: "Digital Marketing",
      description: "Market products online.",
      image: "assets/images/digital-marketing.jpg",
      price: "$820",
      id: "digital-marketing5",
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
        '<p class="course-price">' +
        course.price +
        "</p>" +
        '<a href="buy-course.html?course=' +
        course.id +
        '" class="btn buy-btn">Buy Coures Now</a>' +
        "</div>"
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
    var termsChecked = document.getElementById("terms").checked;
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirm-password").value;

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
    // If no errors, form will submit normally
  });
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
  });
});
