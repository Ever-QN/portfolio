// Get all section elements
const sections = document.querySelectorAll('.section');

// Get all navigation links
const navLinks = document.querySelectorAll('.nav-item');

// Function to add or remove active class from navigation link
function updateNav() {
  sections.forEach((section, index) => {
    const position = section.offsetTop;
    const height = section.offsetHeight;
    if (window.scrollY >= position && window.scrollY < position + height) {
      navLinks.forEach(navLink => {
        navLink.classList.remove('active');
      });
      navLinks[index].classList.add('active');
    } else {
      navLinks[index].classList.remove('active');
    }
  });
}

// Add event listener for scroll
window.addEventListener('scroll', updateNav);