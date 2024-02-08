// Mamy listę elementów <li> i chcemy nsałuchiwać na kliknięcie każdego z nich, aby pobrać jego
// wartość textContent i wstawić w miejsce lementu <span>

//Delegacja zdarzeń polega na zarejestrowaniu obsługi danego zdarzenia dla rodzica elementów, które nas interesują, i
// analizowanie rodzaju elementu, na którym to zdarzenie wystąpiło

const selected = document.getElementById('selected');
const list = document.getElementById('list');
list.addEventListener('click', (event) => {
  const el = event.target;
  selected.textContent = el.nodeName === 'LI' ? el.textContent : '';
});
