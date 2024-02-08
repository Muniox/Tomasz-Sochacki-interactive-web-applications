function buttonClickHandler() {
  alert('Kliknięto przycisk');
}

const btn2 = document.getElementById('btn2');
const clickHandler = () => {
  alert('Kliknięto w przycisk!');
  // jeśli chcemy wyłaczyć nasłuchiwanie na dany event np. mamy przypadek, że chcemy wywołać dany event tylko raz:
  btn2.removeEventListener('click', clickHandler);
};

btn2.addEventListener('click', clickHandler);
// lub
// btn2.addEventListener('click', () => clickHandler());

/**
 * Zapisać można inaczej poprzez element.zdarzenie:
 *
 * btn2.onclick = () => console.log('Kliknięto przycisk');
 * btn2.onclick = () => console.log('Druga funkcja dla zdarzenia click');
 *
 * z tym, że druge wywołanie nadpisuje wcześniejsze
 * addEventListener jest bardziej uniwersalny ponieważ nałoży obydwa eventy
 */
