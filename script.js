const burger = document.getElementById("burger");
const navLinks = document.getElementById("navLinks");

burger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });
});

const form = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    formMsg.textContent = "Thanks! Your message has been sent.";

    form.reset();
});
