console.log("Welcome to Xin Gu's Academic Site!");

// Back-to-top button behavior
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Highlight the current page
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Toggle menu functionality
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".main-nav");
  
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
