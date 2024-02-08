const container = document.getElementById('container');
const mouseEnterCounter = document.getElementById('mouseenter');
const mouseOverCounter = document.getElementById('mouseover');
const mouseLeaveCounter = document.getElementById('mouseleave');
const mouseOutCounter = document.getElementById('mouseout');

container.addEventListener('mouseenter', (e) => {
  const actual = Number(mouseEnterCounter.textContent);
  mouseEnterCounter.textContent = actual + 1;
});
