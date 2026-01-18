/* ==================================================
   SMOOTH SCROLL NAVIGATION
================================================== */
document.querySelectorAll(".navbar button").forEach(button => {
    button.addEventListener("click", () => {
        const sectionId = button.textContent.trim();
        const section = document.getElementById(sectionId);

        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    });
});

/* ==================================================
   ACTIVE NAV BUTTON ON SCROLL
================================================== */
const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll(".navbar button");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navButtons.forEach(btn => {
        btn.classList.remove("active");
        if (btn.textContent.trim() === current) {
            btn.classList.add("active");
        }
    });
});

/* ==================================================
   DYNAMIC GREETING + LIVE DATE & TIME
================================================== */
const homeSection = document.querySelector(".home");
const greeting = document.createElement("p");
greeting.style.marginTop = "15px";
greeting.style.color = "#4da3ff";

homeSection.appendChild(greeting);

const updateGreeting = () => {
    const now = new Date();
    const hour = now.getHours();
    let message = "Welcome to AdeJosh Exchange";

    if (hour < 12) message = "Good Morning 👋 Welcome to AdeJosh Exchange";
    else if (hour < 18) message = "Good Afternoon 👋 Welcome to AdeJosh Exchange";
    else message = "Good Evening 🌙 Welcome to AdeJosh Exchange";

    greeting.textContent = `${message} | ${now.toLocaleString()}`;
};

updateGreeting();
setInterval(updateGreeting, 1000);

/* ==================================================
   SERVICE CARD INTERACTION
================================================== */
document.querySelectorAll(".service-card").forEach(card => {
    card.addEventListener("click", () => {
        document.querySelectorAll(".service-card").forEach(c => {
            c.style.outline = "none";
        });

        card.style.outline = "2px solid #4da3ff";
    });
});

/* ==================================================
   TESTIMONIAL HOVER EFFECT
================================================== */
document.querySelectorAll(".testimonial-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.04)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

/* ==================================================
   SCROLL REVEAL (OPTIMIZED)
================================================== */
const revealElements = document.querySelectorAll(
    ".service-card, .testimonial-card"
);

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            el.classList.add("reveal");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ==================================================
   CONTACT FORM FEEDBACK (NON-BLOCKING)
================================================== */
const form = document.querySelector(".contact-form");

const successMsg = document.createElement("div");
successMsg.textContent = "✅ Your details have been received. We’ll contact you shortly.";
successMsg.style.marginTop = "15px";
successMsg.style.color = "#4da3ff";
successMsg.style.display = "none";

form.appendChild(successMsg);

form.addEventListener("submit", () => {
    successMsg.style.display = "block";

    setTimeout(() => {
        successMsg.style.display = "none";
    }, 5000);
});
