import { isValidEmail, showError, clearError } from "./utils.js";

const form = document.getElementById("forgotForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let email = document.getElementById("email").value.trim();
        let error_Message = document.getElementById("errorMessage");

        clearError(error_Message);

        if (email === "") {
            return showError(error_Message, "Email is required");
        }

        if (!isValidEmail(email)) {
            return showError(error_Message, "Enter a valid email");
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(u => u.email === email);

        if (!user) {
            return showError(error_Message, "Email not found");
        }

    
        localStorage.setItem("resetEmail", email);

        alert("Verification code sent!");

        window.location.href = "yummy_Verivication.html";
    });
}