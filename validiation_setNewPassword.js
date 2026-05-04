import { isValidPassword, showError, clearError } from "./utils.js";
const form = document.getElementById("newPasswordForm");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let errorMessage = document.getElementById("errorMessage");
        clearError(errorMessage);
        if (password === "") {
            return showError(errorMessage, "Password is required");
        }
        if (!isValidPassword(password)) {
            return showError(errorMessage, "Password must be at least 8 characters");
        }
        if (confirmPassword === "") {
            return showError(errorMessage, "Please confirm your password");
        }
        if (password !== confirmPassword) {
            return showError(errorMessage, "Passwords do not match");
        }
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let email = localStorage.getItem("resetEmail");
        console.log("Reset Email:", email);
        console.log("Users BEFORE:", users);
        if (!email) {
            return showError(errorMessage, "Session expired. Please try again.");
        }
        const userIndex = users.findIndex(u => u.email === email);

        if (userIndex === -1) {
            return showError(errorMessage, "User not found");
        }
        users[userIndex].password = password;
        localStorage.setItem("users", JSON.stringify(users));
        console.log("Users AFTER:", users);
        localStorage.removeItem("resetEmail");
        alert("Password updated successfully!");
        setTimeout(() => {
            window.location.href = "yummy-signin.html";
        }, 500);
    });
}