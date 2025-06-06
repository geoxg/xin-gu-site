const scriptURL = 'https://script.google.com/macros/s/AKfycbwvPUB0M5yxL2T3MPzmOmBQTP9fHXxwI-sjWca6O9Nv3zLzE0P2s2xzmZ4EsgJYnkcp/exec';
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');

form.addEventListener('submit', e => {
  e.preventDefault();

  const formData = new FormData(form); // Use FormData for Google Apps Script compatibility

  fetch(scriptURL, {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (response.ok) {
      form.reset();
      successMsg.style.display = 'block';
      setTimeout(() => {
        successMsg.style.display = 'none';
      }, 5000);
    } else {
      throw new Error('Network response was not ok.');
    }
  })
  .catch(error => {
    alert('Something went wrong. Please try again later.');
    console.error('Error!', error.message);
  });
});

