// Fade-in on scroll
document.addEventListener('DOMContentLoaded', () => {
  // Animate elements on load
  const fadeEls = document.querySelectorAll('.fade-in');
  fadeEls.forEach((el, i) => {
    el.style.animationDelay = `${i * 0.1}s`;
  });

  // Mobile nav toggle
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      toggle.classList.toggle('open');
    });
  }

  // Scroll reveal for sections
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('reveal');
    observer.observe(section);
  });
});
