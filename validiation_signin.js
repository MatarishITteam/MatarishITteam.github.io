import { isValidEmail, showError, clearError } from "./utils.js";

const form = document.getElementById("loginForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let error_Message = document.getElementById("errorMessage");
        clearError(error_Message);
        if (email === "") return showError(error_Message, "Email is required");
        if (!isValidEmail(email)) return showError(error_Message, "Enter a valid email");
        if (password === "") return showError(error_Message, "Password is required");
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(user => user.email === email);
        if (!user) {
            return showError(error_Message, "User not found");
        }

        if (!user.isVerified) {
            return showError(error_Message, "Please verify your account first");
        }

        if (user.password !== password) {
            return showError(error_Message, "Invalid credentials");
        }

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("loggedInUser", email);

        alert("Login Successful");

        window.location.href = "index.html";
    });
}