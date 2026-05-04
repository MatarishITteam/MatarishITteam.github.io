
        const loginBtn = document.getElementById("loginBtn");
        const logoutBtn = document.getElementById("logoutBtn");
        const userName = document.getElementById("userName");
        const responsesLink = document.getElementById("responsesLink");
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const users = JSON.parse(localStorage.getItem("users")) || [];
        const email = localStorage.getItem("loggedInUser"); 
        const user = users.find(u => u.email === email);

        if (isLoggedIn === "true" && user) {
            userName.textContent = user.username;

            loginBtn.style.display = "none";
            logoutBtn.style.display = "inline-block";

        if (user.username === "ywezwe") {
            responsesLink.style.display = "inline-block";
        } else {
            responsesLink.style.display = "none";
        }

        } else {
            userName.textContent = "";
            loginBtn.style.display = "inline-block";
            logoutBtn.style.display = "none";
            responsesLink.style.display = "none";
        }

        logoutBtn.addEventListener("click", () => {
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("loggedInUser");
            window.location.reload();
        });
