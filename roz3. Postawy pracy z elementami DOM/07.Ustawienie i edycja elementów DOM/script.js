const container = document.getElementById('container'); // wybranie elementu/kontenera
const text = document.createElement('p'); // stworzenie elementu p
text.textContent = 'jakiś napis'; // dodanie ciągu tekstowego do elementu p
container.appendChild(text); // dodanie elementu p do kontenera

text.id = 'text-id';
// lub
text.setAttribute('id', 'jakiś napis');

// Przypisanie do elementu atrybutu class:

text.className = 'css-class';
text.setAttribute('class', 'css-class');

// Istnieje również metoda setAttribute, w której przyjmuje jeden parametr: nazwę szukanego atrybutu.
// Jeśli element nie posiada takiego atrybutu, to metoda ta zwróci wartość null:
console.log(text.getAttribute('class')); // "css-class"
