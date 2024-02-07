// wstawienie elementu na samym końcu listy
const list = document.getElementById('list');
const newElement = document.createElement('li');
newElement.textContent = 'Trzeci element';
list.appendChild(newElement);

// wstawienie elementu przed określonym elementem
// w parametrze musimy podać przed jakim elementem chcemy wstawić element
// jeśli wstawimy null zachowa się podobnie jak powyższy przykład

list.insertBefore(newElement, null);

// Metoda insertAdjecent
/**
 * Należy podać jedną z czterecha wartości
 *
 * beforebegin
 *  <p>
 *    afterbegin
 *      foo
 *    beforeend
 *  </p>
 * afterend
 */

list.insertAdjacentElement('beforebegin', newElement);

/**
 * Gdy operacja wstawiania elementu się powiedzie, to zwraca ona referencje do nowo utworzonego elementu
 *
 * const newElementRef = list.appendChild(newElement);
 * const newElementRef = list.insertBefore(newElement, list.firstChild);
 * const newElementRef = list.insertAdjecentElement('afterbegin', newElement);
 */
