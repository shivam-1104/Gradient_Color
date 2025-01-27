const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const colorInfo = document.getElementById('color-info');

function getRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
  return randomColor;
}

function hexToRgb(hex) {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `rgb(${r}, ${g}, ${b})`;
}

function updateButtonColor(button) {
  const color = getRandomColor();
  button.style.backgroundColor = color;
  button.textContent = color;
  updateBackground();
}

function updateBackground() {
  const color1 = window.getComputedStyle(button1).backgroundColor;
  const color2 = window.getComputedStyle(button2).backgroundColor;
  document.body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;

  const rgb1 = color1;
  const rgb2 = color2;
  colorInfo.textContent = `Button 1: ${rgb1}, Button 2: ${rgb2}`;
}

button1.addEventListener('click', () => updateButtonColor(button1));
button2.addEventListener('click', () => updateButtonColor(button2));


updateButtonColor(button1);
updateButtonColor(button2);