const title = document.getElementById('title').textContent;
console.log(title); // "Tytuł artykułu"

// Wcześniej mówiliśmy, że metoda getElementsById może zwrócić null, jeśli nie uda jej się znaleźć szukanego elementu,
// Aby się przed tym zabezpieczyć, możemy użyć:

const title2 = document.getElementById('title');
let titleValue;

if (title) {
  titleValue = title2.textContent;
  console.log(titleValue); // "Tytuł artykułu"
}

// textContent vs innerHTML

const content = document.querySelector('#content');
console.log(content.textContent);
// w konsoli zobaczymy:
// Akapit pierwszy
// Akapit drugi
// Reklama
// Akapit trzeci

const content2 = document.querySelector('#content');
console.log(content);
// <p>Akapit pierwszy</p>
// <p>Akapit drugi</p>
// <div dara-advertising=''>Reklama</div>
// <p>Akapit trzeci</p>

// używanie innerHTML może doprowadzić do ataków XSS
