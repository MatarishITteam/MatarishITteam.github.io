import { isValidPassword, showError, clearError } from "./utils.js";

const form = document.getElementById("newPasswordForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let password = document.getElementById("password").value.trim();
        let confirmPassword = document.getElementById("confirmPassword").value.trim();
        let errorMsg = document.getElementById("errorMsg");

        clearError(errorMsg);

        if (password === "") {
            return showError(errorMsg, "Password is required");
        }

        if (!isValidPassword(password)) {
            return showError(errorMsg, "Password must be at least 8 characters");
        }

        if (confirmPassword === "") {
            return showError(errorMsg, "Please confirm your password");
        }

        if (password !== confirmPassword) {
            return showError(errorMsg, "Passwords do not match");
        }

        alert("Password Updated Successfully!");
    });
}