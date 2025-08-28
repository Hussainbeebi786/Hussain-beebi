// Smooth scrolling effect for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Check if the user is logged in
function isUserLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Redirect to login if not logged in
function checkLoginAndRedirect(page) {
    if (!isUserLoggedIn()) {
        window.location.href = 'login.html';
    } else {
        window.location.href = page;
    }
}

// Password strength validation
function isStrongPassword(password) {
    const strongPasswordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return strongPasswordRegex.test(password);
}

// Change header background based on page
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector("header");
    const page = window.location.pathname.split('/').pop();

    const pageColors = {
        "index.html": "#87CEFA",       // Light Blue
        "city-services.html": "#28a745", // Green
        "emergency.html": "#dc3545",   // Red
        "alerts.html": "#ffc107",      // Yellow
        "weather.html": "#17a2b8",     // Teal
        "events.html": "#6f42c1"       // Purple
    };

    if (header && pageColors[page]) {
        header.style.backgroundColor = pageColors[page];
    }
});

// Disable categories dropdown if not logged in
window.onload = function() {
    const categoryLinks = document.querySelectorAll(".category-link");
    categoryLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            if (!isUserLoggedIn()) {
                e.preventDefault();
                window.location.href = 'login.html';
            }
        });
    });

    const categoryDropdownLink = document.querySelector(".dropdown a");
    if (categoryDropdownLink) {
        categoryDropdownLink.addEventListener('click', function(e) {
            if (!isUserLoggedIn()) {
                e.preventDefault();
                window.location.href = 'login.html';
            }
        });
    }
};

// Register Page Logic
const registerForm = document.getElementById("registerForm");
if (registerForm) {
    registerForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const email = document.getElementById("email").value;
        const newUsername = document.getElementById("new-username").value;
        const newPassword = document.getElementById("new-password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        // Validate strong password
        if (!isStrongPassword(newPassword)) {
            alert(
                "Password must meet the following conditions:\n" +
                "At least 8 characters long\n" +
                "At least one uppercase letter\n" +
                "At least one number\n" +
                "At least one special character (e.g., @, $, %, &)"
            );
            return;
        }

        // Check if passwords match
        if (newPassword !== confirmPassword) {
            alert("Error: Passwords do not match!");
            return;
        }

        // Save new user (in localStorage for demo purposes)
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.push({ email: email, username: newUsername, password: newPassword });
        localStorage.setItem("users", JSON.stringify(users));

        alert("Registration successful! You can now log in.");
        window.location.href = "login.html";
    });
}
