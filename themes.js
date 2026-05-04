const Button = document.getElementById("themeToggle");

if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark");
    Button.textContent = "☀️";
}

    Button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        localStorage.setItem("theme", "dark");
        Button.textContent = "☀️";
    }else{
        localStorage.setItem("theme", "light");
        Button.textContent = "🌙";
    }
});