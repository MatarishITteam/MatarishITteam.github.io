const searchInput = document.getElementById("searchInput");

const recipes = {
    "roast turkey": "Roast Turkey.html",
    "chocolate cake": "Chocolate Cake.html",
    "hot chocolate": "Hot Chocolate.html",
    "steak": "Steak.html",
    "brownies": "Brownies.html",
    "smoothie": "Smoothie.html"
};

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();

        const query = searchInput.value.toLowerCase().trim();

        if (recipes[query]) {
            window.location.href = recipes[query];
        } else {
            alert("Recipe not found");
        }
    }
});