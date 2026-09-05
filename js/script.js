// =========================
// MOBILE NAVIGATION
// =========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");

        if (navLinks.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("show");
            menuToggle.textContent = "☰";
        });
    });
}


// =========================
// CURRENT YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// PROJECT FILTER
// =========================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Remove active class
        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        // Add active class
        button.classList.add("active");

        const filter = button.dataset.filter;

        projectCards.forEach(card => {

            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.classList.remove("hidden");
            } else {
                card.classList.add("hidden");
            }

        });

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            formMessage.style.color = "#dc2626";
            formMessage.textContent = "Please fill in all fields.";
            return;
        }

        formMessage.style.color = "#16a34a";
        formMessage.textContent =
            `Thank you, ${name}! Your message has been received.`;

        contactForm.reset();

    });

}
