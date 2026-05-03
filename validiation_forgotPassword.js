import { isValidEmail, showError, clearError } from "./utils.js";

const form = document.getElementById("forgotForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let errorMsg = document.getElementById("errorMsg");

        clearError(errorMsg);

        if (email === "") {
            return showError(errorMsg, "Email is required");
        }

        if (!isValidEmail(email)) {
            return showError(errorMsg, "Enter a valid email");
        }

        alert("Verification code sent!");
    });
}