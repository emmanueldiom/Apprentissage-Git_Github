// ===== BOUTON HERO =====
const button = document.querySelector(".hero button");

button.addEventListener("click", () => {
    alert("Bienvenue Emmanuel 🚀 !");
});


// ===== ANIMATION AU SCROLL =====
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.3
});

cards.forEach(card => {
    observer.observe(card);
});


// ===== MENU ACTIF =====
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
    });
});


// ===== HEADER SCROLL EFFECT =====
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "#020617cc";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "#020617";
        header.style.backdropFilter = "none";
    }
});