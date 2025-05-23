// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Simple form validation
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const email = document.querySelector('#email').value;
    const message = document.querySelector('#message').value;
    if (!email || !message) {
      e.preventDefault();
      alert('Please fill in all fields.');
    }
  });
}

// Dynamic typing effect for the title
const titleElement = document.querySelector('.title');
const titles = ['DevOps Engineer', 'Cloud Enthusiast', 'Automation Expert'];
let titleIndex = 0;
let charIndex = 0;
let currentTitle = '';
let isDeleting = false;

function typeEffect() {
  if (titleElement) {
    if (isDeleting) {
      currentTitle = titles[titleIndex].substring(0, charIndex--);
    } else {
      currentTitle = titles[titleIndex].substring(0, charIndex++);
    }

    titleElement.textContent = currentTitle;

    if (!isDeleting && charIndex === titles[titleIndex].length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }
}

typeEffect();
