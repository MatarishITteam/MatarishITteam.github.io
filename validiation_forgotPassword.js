document.getElementById("forgotForm").addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("email").value.trim();
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

    alert("Verification code sent!");
});