document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
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

    alert("Login Successful");
});