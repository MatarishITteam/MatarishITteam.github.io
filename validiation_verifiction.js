document.getElementById("verificationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let code = document.getElementById("code").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if(code === ""){
        errorMsg.textContent = "Verification code is required";
        return;
    }

    if(isNaN(code)){
        errorMsg.textContent = "Code must contain numbers only";
        return;
    }

    if(code.length !== 6){
        errorMsg.textContent = "Code must be 6 digits";
        return;
    }

    alert("Verification Successful!");
});