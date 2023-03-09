const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop + parseInt(getComputedStyle(section).getPropertyValue("scroll-margin-top"));
    const sectionHeight = section.clientHeight;
    
    if (scrollPosition >= sectionTop - 300 && scrollPosition < sectionTop + sectionHeight - 300) {
      navLinks.forEach((navLink) => {
        navLink.classList.remove("active");
      });

      const currentNavLink = navLinks[index];
      currentNavLink.classList.add("active");
    }
  });
});