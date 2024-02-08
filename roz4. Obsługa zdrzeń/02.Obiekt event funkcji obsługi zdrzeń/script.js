const btn = document.getElementById('btn');
btn.addEventListener('click', (event) => {
  console.log(event.target.textContent, event.target, event);
  event.target.style.backgroundColor = 'red';
});

const box = document.getElementById('box');
box.addEventListener('click', (e) => {
  console.log(`Pozycja myszki: ${e.clientX}, ${e.clientY}`);
});
