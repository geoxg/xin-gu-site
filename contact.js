const scriptURL = 'https://script.google.com/macros/s/AKfycbwhtVnX2d7VIaymafE5B1Gbp73M9lZvsJBcqB_nufqvKi-L1aceIAv6vqBEK6XkIPX0/exec';
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