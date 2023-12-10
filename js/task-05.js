function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyElement = document.body;
const changeColor = document.querySelector(`.change-color`);
const color = document.querySelector(`.color`);

changeColor.addEventListener(`click`, () => {
  const randomColor = getRandomHexColor();

    bodyElement.style.backgroundColor = randomColor;
    color.textContent = randomColor;
}) 


