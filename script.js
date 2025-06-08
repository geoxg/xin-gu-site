console.log("Welcome to Xin Gu's Academic Site!");

// Show/hide back-to-top button
const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Highlight current nav link
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Toggle nav menu on mobile
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".main-nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  // Optional: Hide menu after clicking a nav link (mobile UX improvement)
  document.querySelectorAll(".main-nav a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
});


