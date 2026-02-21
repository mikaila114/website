// Select elements
const hamburger = document.querySelector('.hamburger');
const navAndBtns = document.querySelector('.nav-and-btns');
const bars = document.querySelectorAll('#bar');

// Toggle menu when hamburger is clicked
hamburger.addEventListener('click', () => {
  // Show / hide navigation
  navAndBtns.classList.toggle('show');

  // Animate hamburger bars
  bars[0].classList.toggle('m0');
  bars[1].classList.toggle('m1');
  bars[2].classList.toggle('m2');
});

// Optional: close menu when a nav link is clicked (mobile UX)
const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navAndBtns.classList.remove('show');
    bars[0].classList.remove('m0');
    bars[1].classList.remove('m1');
    bars[2].classList.remove('m2');
  });
});