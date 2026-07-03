"use strict";

/* ==============================
   HT SOFTWARE SOLUTIONS
   script.js
   ============================== */


/* ===========================================
   STICKY HEADER ON SCROLL
=========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});


/* ===========================================
   MOBILE MENU TOGGLE
=========================================== */

const navToggle = document.createElement("div");

navToggle.classList.add("nav-toggle");

navToggle.innerHTML = "☰";

document.querySelector("header .container").appendChild(navToggle);

const nav = document.querySelector("nav");

navToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

});

/* ===========================
   Mobile Menu
=========================

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

});                           

== */

/* ===========================================
   SMOOTH SCROLL FOR ANCHORS
=========================================== */

document.querySelectorAll("a[href^='#']").forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


/* ===========================================
   BACK TO TOP BUTTON
=========================================== */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===========================================
   ACTIVE NAV LINK HIGHLIGHT
=========================================== */

const links = document.querySelectorAll("nav ul li a");

links.forEach(link => {

    link.addEventListener("click", function () {

        links.forEach(l => l.classList.remove("active"));

        this.classList.add("active");

    });

});


/* ===========================================
   SIMPLE SCROLL ANIMATION
=========================================== */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: 0.1

});


document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});


/* ===========================================
   FORM SUBMISSION HANDLING (BASIC)
=========================================== */

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Thank you! Your message has been sent successfully.");

        form.reset();

    });

}
