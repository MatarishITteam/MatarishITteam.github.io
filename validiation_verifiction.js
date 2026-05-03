import { isNumeric, showError, clearError } from "./utils.js";

const form = document.getElementById("verificationForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        let code = document.getElementById("code").value.trim();
        let errorMsg = document.getElementById("errorMsg");

        clearError(errorMsg);

        if (code === "") return showError(errorMsg, "Verification code is required");
        if (!isNumeric(code)) return showError(errorMsg, "Code must contain numbers only");
        if (code.length !== 6) return showError(errorMsg, "Code must be 6 digits");

        if (code !== "000000") {
            return showError(errorMsg, "Invalid verification code");
        }

        let users = JSON.parse(localStorage.getItem("users")) || [];
        let email = localStorage.getItem("currentUserEmail");

        // Find and update user
        const userIndex = users.findIndex(user => user.email === email);

        if (userIndex !== -1) {
            users[userIndex].isVerified = true;
            localStorage.setItem("users", JSON.stringify(users));
        }

        localStorage.removeItem("currentUserEmail");

        alert("Verification Successful!");
        window.location.href = "yummy-signin.html";
    });
}