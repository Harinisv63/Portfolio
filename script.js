// Loader (optional)
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.style.opacity = "0";
    setTimeout(() => (loader.style.display = "none"), 500);
  }
});

// Theme Toggle (optional)
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
}

// Particle JS Config
particlesJS("particles-js", {
  particles: {
    number: { value: 80 },
    color: { value: "#00ff99" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: 2 },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#00ff99",
      opacity: 0.4,
      width: 1
    },
    move: { enable: true, speed: 2 }
  },
  interactivity: {
    events: { onhover: { enable: true, mode: "repulse" } }
  }
});

// Typing Effect
const typingText = document.querySelector(".typing-text");
const words = ["Front-End Developer", "UI/UX Designer", "Creative Thinker"];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if (!typingText) return;
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (!typingText) return;
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 300);
  }
}
document.addEventListener("DOMContentLoaded", type);

// Intersection Observer Options
const observerOptions = { threshold: 0.3 };

// About Section Observer
const aboutObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");

      // Animate badges and cards only when About is visible
      const badges = document.querySelectorAll(".badge");
      const infoCards = document.querySelectorAll(".info-card");

      badges.forEach((badge, index) => {
        setTimeout(() => badge.classList.add("visible"), index * 150);
      });

      infoCards.forEach((card, index) => {
        setTimeout(() => card.classList.add("visible"), index * 200);
      });

      // Stop observing after first trigger
      aboutObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

const aboutSection = document.querySelector(".about");
if (aboutSection) aboutObserver.observe(aboutSection);

// Journey Timeline Observer
const journeyItems = document.querySelectorAll(".timeline-item");

const journeyObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 150);
      journeyObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

journeyItems.forEach((item) => journeyObserver.observe(item));

// Skills Observer
const skills = document.querySelectorAll(".skill");

const skillsObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add("visible"), index * 100);
      skillsObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

skills.forEach((skill) => skillsObserver.observe(skill));
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Message sent successfully!");
});
// Intersection Observer for Contact Section (Fade-in Animation)
const contactSection = document.querySelector(".contact");

if (contactSection) {
  const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.3 });

  contactObserver.observe(contactSection);
}
