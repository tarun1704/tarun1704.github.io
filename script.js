// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Simple fade-in animation on scroll
const faders = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  faders.forEach(sec => {
    const pos = sec.getBoundingClientRect().top;
    if (pos < window.innerHeight - 150) {
      sec.classList.add("visible");
    }
  });
});
