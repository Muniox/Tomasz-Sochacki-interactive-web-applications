const list = document.querySelectorAll('#list li');
const filteredItems = [...list].filter(item => item.textContent.length > 6);
console.log(`Elementy o długości większej niż 6 znaków: ${filteredItems.length}`);
// Elementy o długości większej niż 6 znaków: 2

const filteredItems2 = Array.from(list).filter(item => item.textContent.length > 6);

// lub
const list2 = [...document.querySelectorAll('#list li')];
const filteredItems3 = list2.filter(item => item.textContent.length > 6);
console.log(`Elementy o długości większej niż 6 znaków: ${filteredItems3.length}`);
// Elementy o długości większej niż 6 znaków: 2

// lub
const list3 = document.getElementById('list');
const filteredItems4 = [...list3.children].filter(item => item.textContent.length > 6);
console.log(`Elementy o długości większej niż 6 znaków: ${filteredItems4.length}`);
// Elementy o długości większej niż 6 znaków: 2