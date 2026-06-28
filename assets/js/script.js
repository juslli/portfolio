const glow = document.querySelector(".glow");

/* GLOW */

document.addEventListener("mousemove", (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

/* REVEAL (IntersectionObserver = mais leve que scroll event) */

const reveals = document.querySelectorAll(
  ".about-container, .project-card, .skill-card"
);

const revealObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if(entry.isIntersecting){

      entry.target.classList.add("active-reveal");

      revealObserver.unobserve(entry.target);

    }

  });

}, { threshold: 0.15 });

reveals.forEach((element) => revealObserver.observe(element));

/* NAVBAR */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("scrolled");

  }else{

    navbar.classList.remove("scrolled");

  }

});

/* MOBILE MENU */

const menuToggle = document.querySelector(".menu-toggle");

const mobileMenu = document.querySelector(".mobile-menu");

menuToggle.addEventListener("click", () => {

  const isOpen = mobileMenu.classList.toggle("active");

  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");

});

menuToggle.addEventListener("keydown", (e) => {

  if(e.key === "Enter" || e.key === " "){

    e.preventDefault();
    menuToggle.click();

  }

});

/* Fecha o menu mobile ao clicar em um link */

document.querySelectorAll(".mobile-menu a").forEach((link) => {

  link.addEventListener("click", () => {

    mobileMenu.classList.remove("active");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");

  });

});