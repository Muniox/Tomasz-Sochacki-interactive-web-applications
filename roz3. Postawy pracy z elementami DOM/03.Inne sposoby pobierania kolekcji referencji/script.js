/**
 * getElementsByName() zwraca kolekcję NodeList
 * getElementsByClassName() zwraca kolekcję HTMLCollection
 * getElementsByTagName() zwraca kolekcję HTMLCollection
 *
 * Zauważ, że tylko metoda getElementsByName zwraca kolekcję typu NodeList, a pozostałe zwracają kolekcje HTMLCollection.
 * Jedną z różnic między nimi jest fakt, że metoda forEach jest dostępna tylko w kolekcji NodeList
 *
 * Najlepiej korzystać z querySelector
 */

const login1 = document.getElementsByName('login')[0];
const login2 = document.getElementsByClassName('login-css-class')[0];
const login3 = document.getElementsByTagName('div')[0];

// mogą być zastąpione przez querySelcetor

const login4 = document.querySelector('[id="login"]');
const login5 = document.querySelector('#login');
const login6 = document.querySelector('[class="login-css"]');
const login7 = document.querySelector('.login-css');

// pobranie elementów typu checkbox

const selectedAgreements = document.querySelectorAll(
  '#user-agreements [checked]'
);
console.log(selectedAgreements.length); //2
