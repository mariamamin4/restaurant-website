// script.js

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', function(event){
    let valid = true;
    form.querySelectorAll('input, textarea').forEach(input => {
        if (!input.checkValidity()) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (!valid) {
        event.preventDefault();
    }
});

// Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Scroll Animations
const elements = document.querySelectorAll('.animate-on-scroll');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});
