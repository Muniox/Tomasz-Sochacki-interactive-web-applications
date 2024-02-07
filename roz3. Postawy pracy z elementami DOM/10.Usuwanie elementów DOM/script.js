// usunięcie obrazka

const image = document.getElementById('thumbnail');

// obiekt image odnosi się do rodzica, z którego wykonujemy metodę romoveChild
image.parentNode.removeChild(image); // usunie obrazek

image.removeChild(); // nie dostaniemy błędu, ale nie usunie obrazka

// Istnieje jeszcze jedna metoda pozalająca na usunięcie danego elementu, bez konieczności odwoływania się
// do jego właściwości

image.remove();

// metoda remove vs removeChild

const removedElement = image.remove();
console.log(removedElement); // undefined

const removedChildElement = image.parentNode.removeChild(image);
console.log(removedChildElement); // "object"

// rmoveChild pozwala nam dysponować usuniętym elementem

//##############################################################
//Gdy chcemy podmienić dany element

const element = document.querySelector('p');
const span = document.createElement('span');
span.textContent = 'Nowy element span';
element.replaceWith(span);
