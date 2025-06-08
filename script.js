console.log("Welcome to Xin Gu's Academic Site!");

const backToTopBtn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const currentPage = location.pathname.split("/").pop();
  document.querySelectorAll(".main-nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const nav = document.querySelector(".main-nav");

  menuToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });
});

