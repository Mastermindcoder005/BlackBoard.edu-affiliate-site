// Mobile Menu Toggle
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-items .close-icon");
const mobileMenuItems = document.querySelector(".mobile-menu-items");
const allMobileMenuLinks = document.querySelectorAll(".mobile-menu-items a");

// Open mobile menu function
function openMobileMenu() {
  const menu = document.querySelector(".mobile-menu-items");
  if (menu) {
    menu.classList.add("active");
  }
}

// Attach listener as fallback/standard
if (menuIcon) {
  menuIcon.addEventListener("click", openMobileMenu);
}

// Close mobile menu function
function closeMobileMenu() {
  const menu = document.querySelector(".mobile-menu-items");
  if (menu) {
    menu.classList.remove("active");
  }
}

// Close mobile menu event listener (fallback)
if (closeIcon) {
  closeIcon.addEventListener("click", closeMobileMenu);
}

// Close menu when clicking on a link
allMobileMenuLinks.forEach((link) => {
  link.addEventListener("click", closeMobileMenu);
});

// Copy coupon code function
function copyCoupon() {
  navigator.clipboard.writeText("933250").then(function () {
    alert("Coupon code copied: 933250");
  });
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');

    // Skip if it's just "#"
    if (href === '#') {
      e.preventDefault();
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Scroll Reveal Animation
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-fade');

  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Optionally unobserve after animation to improve performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => {
    observer.observe(element);
  });
}

// Initialize scroll reveal when DOM is loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initScrollReveal);
} else {
  initScrollReveal();
}