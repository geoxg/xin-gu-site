const scriptURL = 'https://script.google.com/macros/s/AKfycbwvPUB0M5yxL2T3MPzmOmBQTP9fHXxwI-sjWca6O9Nv3zLzE0P2s2xzmZ4EsgJYnkcp/exec';
const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMessage');

form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    firstName: form.firstName.value,
    lastName: form.lastName.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    form.reset();
    successMsg.style.display = 'block';
    setTimeout(() => {
      successMsg.style.display = 'none';
    }, 5000);
  })
 .catch(error => {
   alert('Something went wrong. Please try again later.');
   console.error('Error!', error.message);
  });

});


function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);

  // 1. Save to Google Sheet
  sheet.appendRow([
    new Date(),
    data.firstName,
    data.lastName,
    data.email,
    data.phone,
    data.message
  ]);

  // 2. Notify Site Owner (You)
  const adminEmail = "your-email@gmail.com"; // 🔁 Replace with your email
  const adminSubject = `New Contact Form Submission from ${data.firstName} ${data.lastName}`;
  const adminBody = `
You received a new message from your contact form:

Name: ${data.firstName} ${data.lastName}
Email: ${data.email}
Phone: ${data.phone}

Message:
${data.message}
  `;

  MailApp.sendEmail({
    to: adminEmail,
    subject: adminSubject,
    body: adminBody,
    replyTo: data.email
  });

  // 3. Auto-Reply to Submitter
  const userSubject = "Thanks for contacting Dr. Xin Gu!";
  const userHtml = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="color:#4a9c6e;">Hello ${data.firstName},</h2>
      <p>Thank you for reaching out! I’ve received your message and will respond as soon as possible.</p>
      <p><strong>Here's a copy of your message:</strong></p>
      <blockquote style="border-left: 4px solid #4a9c6e; margin: 1em 0; padding-left: 1em; color: #555;">
        ${data.message}
      </blockquote>
      <p>Looking forward to connecting with you.</p>
      <br />
      <p>Warm regards,<br><strong>Xin Gu</strong><br>Postdoctoral Scholar<br>Texas State University</p>
    </div>
  `;

  MailApp.sendEmail({
    to: data.email,
    subject: userSubject,
    htmlBody: userHtml
  });

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}


