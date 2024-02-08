const form = document.getElementById('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (isFormValid()) {
    // wysłanie formularza
  } else {
    alert('Formularz zawiera błędy!');
  }
});
