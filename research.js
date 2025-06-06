function showModal(imgDiv) {
    const img = imgDiv.querySelector('img');
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
  
    modal.style.display = "block";
    modalImg.src = img.src;
  }
  
  function hideModal() {
    document.getElementById("imgModal").style.display = "none";
  }