const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navigation");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

