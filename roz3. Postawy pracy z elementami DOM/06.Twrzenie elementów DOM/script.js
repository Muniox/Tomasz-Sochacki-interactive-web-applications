const container = document.getElementById('container'); // wybranie elementu/kontenera
const text = document.createElement('p'); // stworzenie elementu p
text.textContent = 'jakiś napis'; // dodanie ciągu tekstowego do elementu p
container.appendChild(text); // dodanie elementu p do kontenera

// appendChild powoduje dodanie elementu text (wskazanego jako parametr metody) jako ostatniego elementu obiektu,
// na którym jest wywoływana.
