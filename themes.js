const Button = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
    Button.className = "fa-regular fa-sun";
} else {
    Button.className = "fa-regular fa-moon";
}

Button.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        Button.className = "fa-regular fa-sun";
    } else {
        localStorage.setItem("theme", "light");
        Button.className = "fa-regular fa-moon";
    }
});