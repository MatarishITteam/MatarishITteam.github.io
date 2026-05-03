import { isValidEmail, showError, clearError } from "./utils.js";

const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let errorMsg = document.getElementById("errorMsg");

        clearError(errorMsg);

        if (email === "") return showError(errorMsg, "Email is required");
        if (!isValidEmail(email)) return showError(errorMsg, "Enter a valid email");
        if (password === "") return showError(errorMsg, "Password is required");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        // Find user
        const user = users.find(user => user.email === email);

        if (!user) {
            return showError(errorMsg, "User not found");
        }

        if (!user.isVerified) {
            return showError(errorMsg, "Please verify your account first");
        }

        if (user.password !== password) {
            return showError(errorMsg, "Invalid credentials");
        }

        // Save session
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", email);

        alert("Login Successful");

        window.location.href = "index.html";
    });
}