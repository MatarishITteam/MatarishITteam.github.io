import { isValidEmail, isValidPassword, showError, clearError } from "./utils.js";

const form = document.getElementById("signupForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let error_Message = document.getElementById("errorMessage");

        clearError(error_Message);

        if (email === "") return showError(error_Message, "Email is required");
        if (!isValidEmail(email)) return showError(error_Message, "Enter a valid email");
        if (password === "") return showError(error_Message, "Password is required");
        if (!isValidPassword(password)) return showError(error_Message, "Password must be at least 8 characters");
        if (confirmPassword === "") return showError(error_Message, "Please confirm your password");
        if (password !== confirmPassword) return showError(error_Message, "Passwords do not match");

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const existingUser = users.find(user => user.email === email);
        if (existingUser) {
            return showError(error_Message, "Email already registered");
        }

        users.push({
            username,
            email,
            password,
            isVerified: false
        });

        localStorage.setItem("users", JSON.stringify(users));

        localStorage.setItem("currentEmail", email);

        window.location.href = "yummy_Verivication.html";
    });
}