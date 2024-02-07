const list = document.getElementById('container');
const items = ['Ford', 'Opel', 'Audi'];

// każde wywołanie aktualizuje drzewo DOM i tym samym aktualizuje widok strony internetowej
items.forEach((label) => {
  const newElement = document.createElement('li');
  newElement.textContent = label;
  list.appendChild(newElement); // każda iteracja odświeża drzewo DOM
});

// wydajnościowo najlepiej stowrzyć listę a później ją dodać do drzewa DOM
const fragment = document.createDocumentFragment();
items.forEach((label) => {
  const newElement = document.createElement('li');
  newElement.textContent = label;
  fragment.appendChild(newElement);
});
list.appendChild(fragment); // odświeżenie drzewa DOM następuje tylko raz w tym miejscu

// Fragment jest uproszczonym bytem wirtualnym, tymczasowym, służącym właśnie do tego, aby nie dokonywać
// co chwilę wielokrotnych aktualizacji DOM, jeśli nie jest to potrzebne
