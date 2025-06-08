console.log("Welcome to Xin Gu's Academic Site!");

// Back-to-top button behavior
document.addEventListener("DOMContentLoaded", () => {
  const backToTopBtn = document.getElementById('backToTop');
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".main-nav");

  // Scroll listener for back-to-top button
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  // Highlight the current page in nav
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Toggle menu on mobile
  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("open");
    });
  }
});
