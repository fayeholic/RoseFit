// Registration Form Validation
const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!registerForm.checkValidity()) {
    registerForm.classList.add('was-validated');
    return;
  }

  // Show Bootstrap success modal
  const successModal = new bootstrap.Modal(document.getElementById('successModal'));
  successModal.show();

  // Reset form
  registerForm.reset();
  registerForm.classList.remove('was-validated');
});
// Contact Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  if (!contactForm.checkValidity()) {
    contactForm.classList.add('was-validated');
    return;
  }

  // Success feedback
  alert('Thank you! Your message has been sent.');

  // Reset form
  contactForm.reset();
  contactForm.classList.remove('was-validated');
});
