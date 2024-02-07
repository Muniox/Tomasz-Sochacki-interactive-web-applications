// Chcemy wyświetlić liczbę wszystkich zgód, jakie powinien zaznaczyć użytkownik
// oraz liczbę zgód, które już zaznaczył.

const agreementsList = document.querySelector('#user-agreements');
const allAgrements = document.querySelectorAll('[data-agreement]');
const selectedAgreements = agreementsList.querySelectorAll('[checked]');

console.log(`Wszystkie zgody: ${allAgrements.length}`); // Wszystkie zgody: 4
console.log(`Zaznaczone: ${selectedAgreements.length}`); // Zaznaczone: 2

// Zadanie to można jednak wykonać również w inny sposób, tylko raz pobierając listę referencji DOM
// i wykorzystując metodę tablicową Array.prototype.filter

const allAgrements2 = Array.from(document.querySelectorAll('[data-agreement]'));
const selectedAgreementsFilter = allAgrements2.filter((item) => item.checked);
