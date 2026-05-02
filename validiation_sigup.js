document.getElementById("signupForm").addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let confirmPassword = document.getElementById("confirmPassword").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if(email === ""){
        errorMsg.textContent = "Email is required";
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        errorMsg.textContent = "Enter a valid email";
        return;
    }

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

    alert("Sign Up Successful!");
});