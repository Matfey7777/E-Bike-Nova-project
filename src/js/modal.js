const openModalBtn = document.querySelector('.price-button');
const closeModalBtn = document.getElementById('modal-close-btn');
const backdrop = document.getElementById('order-modal');

if (openModalBtn) {
  openModalBtn.addEventListener('click', () => {
    backdrop.classList.add('is-modal-open');
  });
}

closeModalBtn.addEventListener('click', () => {
  backdrop.classList.remove('is-modal-open');
});

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();

  form.classList.add('was-validated');

  const inputs = form.querySelectorAll('input, textarea');

  inputs.forEach(input => {
    const error = input.nextElementSibling;

    if (!input.validity.valid) {
      if (input.validity.valueMissing) {
        error.textContent = 'This field is required';
      } else if (input.validity.tooShort) {
        error.textContent = `Minimum ${input.minLength} characters`;
      } else if (input.validity.tooLong) {
        error.textContent = `Maximum ${input.maxLength} characters`;
      } else if (input.validity.typeMismatch) {
        error.textContent = 'Please enter a valid email';
      } else if (input.validity.patternMismatch) {
        error.textContent = 'Invalid format';
      }
    } else {
      error.textContent = 'valid';
    }
  });

  if (form.checkValidity()) {
    backdrop.classList.remove('is-modal-open');
  }
});
