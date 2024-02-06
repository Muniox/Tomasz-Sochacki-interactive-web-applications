
// pierwszy i drugi przykład da nam możliwie najwuęjszą uniwersalność i odizolowanie od struktury HTML
const items1 = document.querySelectorAll('#all-items li');
const items2 = document.querySelectorAll('#all-items [data-item]');
const items3 = document.querySelectorAll('li');
const items4 = document.querySelectorAll('[data-item]');

// Gdy metoda querySelectorAll znajdzie co najmniej jeden element, zwróci obiekt będący kolekcją referencji tzw. Kolekcją NodeList
// Istotne jest, aby zapamiętać, że kolekcja ta nie jest tablicą JavaScript, czyli nie jest obiektem z prototypem Array.prototype
// Tym samym nie ma wielu metod charakterystycznych dla tablic jak Array.prototype.filter czy Array.prototype.map


const items5 = document.querySelectorAll('[data-item]');
console.log(items5[0]); // referencja do pierwszego elementu

// Mogłoby to sugerować, że mamy do czynienia z tablicą, ale tak nie jest:

items5.filter(item => item.textContent === 'drugi');
// Uncaught TypeError: itemsfilter is not a function
Array.isArray(items5); // false

// zawiera natomiast metodę bardzo podobną do forEach
items5.forEach(item => console.log(item.textContent))
// Element pierwszy
// Element drugi

// Możemy ją przekonwertować na tablicę
const items6 = Array.from(document.querySelectorAll('[data-item]'));
Array.isArray(items6) // true
const filteredItems = items6.filter(item => item.textContent.includes('drugi'))
console.log(filteredItems.length); // 1

// Taki sam efekt możemy wykorzystać używając operatora spreed
const items7 = [...document.querySelectorAll('[data-item]')];
Array.isArray(items7) // true
console.log(items7.length); // 1

// Błędne sformułowanie warunkowe, ponieważ querySelectorAll oraz getElementsBy zawsze dadzą nam true, nawet jeśli nic nie znajdą

const items8 = document.querySelectorAll('nieistniejący-selektor');
if (items8) {
    // instrukcje, gdy udało się znaleźć referencje
} else {
    // instrukcje, gdy nie znaleziono żadnej referencji
}

// Poniżej poprawne wyrażenie warunkowe

const items9 = document.querySelectorAll('nieistniejący-selektor');
if (items9.length) {
    // instrukcje, gdy udało się znaleźć referencje
} else {
    // instrukcje, gdy nie znaleziono żadnej referencji
}