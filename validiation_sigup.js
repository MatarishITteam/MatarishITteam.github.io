import { isValidEmail, isValidPassword, showError, clearError } from "./utils.js";

const form = document.getElementById("signupForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

    let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let errorMsg = document.getElementById("errorMsg");

        clearError(errorMsg);

        if (email === "") return showError(errorMsg, "Email is required");
        if (!isValidEmail(email)) return showError(errorMsg, "Enter a valid email");
        if (password === "") return showError(errorMsg, "Password is required");
        if (!isValidPassword(password)) return showError(errorMsg, "Password must be at least 8 characters");
        if (confirmPassword === "") return showError(errorMsg, "Please confirm your password");
        if (password !== confirmPassword) return showError(errorMsg, "Passwords do not match");

        // Get users array
        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Check if email already exists
        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return showError(errorMsg, "Email already registered");
        }

        // Add new user
        users.push({
            username,
            email,
            password,
            isVerified: false
        });

        localStorage.setItem("users", JSON.stringify(users));

        // Save current user email for verification
        localStorage.setItem("currentUserEmail", email);

        window.location.href = "yummy_Verivication.html";
    });
}