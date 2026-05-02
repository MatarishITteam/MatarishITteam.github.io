document.getElementById("newPasswordForm").addEventListener("submit", function(e){

    e.preventDefault();

    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if(password === ""){
        errorMsg.textContent = "Password is required";
        return;
    }

    if(password.length < 8){
        errorMsg.textContent = "Password must be at least 8 characters";
        return;
    }

    if(confirmPassword === ""){
        errorMsg.textContent = "Please confirm your password";
        return;
    }

    if(password !== confirmPassword){
        errorMsg.textContent = "Passwords do not match";
        return;
    }

    alert("Password Updated Successfully!");
});