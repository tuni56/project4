const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get form data
  const   
 name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;   


  // Validate data (optional)
  if (!name || !email || !message) {
    alert('Please fill in all fields.');
    return;
  }

  // Send data to server (replace with your server-side logic)
  console.log('Form data:', { name, email, message });

  // Clear form fields
  form.reset();

  // Display a success message
  alert('Your message has been sent!');
});