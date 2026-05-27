const glow = document.querySelector(".glow");

/* GLOW */

document.addEventListener("mousemove", (e) => {

  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;

});

/* REVEAL */

const reveals = document.querySelectorAll(
  ".about-container, .project-card, .skill-card"
);

function revealElements(){

  const windowHeight = window.innerHeight;

  reveals.forEach((element) => {

    const revealTop = element.getBoundingClientRect().top;

    if(revealTop < windowHeight - 100){

      element.classList.add("active-reveal");

    }

  });

}

window.addEventListener("scroll", revealElements);

revealElements();

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

  mobileMenu.classList.toggle("active");

});