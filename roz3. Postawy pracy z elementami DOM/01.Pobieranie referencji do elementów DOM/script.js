// pobieranie referencji za pomocą identyfikatora elementu (id)
const login = document.getElementById('login');

// pobieranie referncji za pomocą identyfikatora elementu przy pomocy funkcji querySelector
const login2 = document.querySelector('#login');

// pobieranie referencji za pomocą atrybutu klasy elementu
const login3 = document.querySelector('.user-login-css-class');

// pobieranie referencji za pomocą atrybutu data-
const login4 = document.querySelector('[data-user-login]');
const login5 = document.querySelector('[data-user-info="login"]');

// pobieranie referencji za pomocą znacznika 'p'
const login6 = document.querySelector('p');

// metoda querySelector może przyjmować również bardziej złożone selektory
const login7 = document.querySelector('div.parent-class p.some-class')
