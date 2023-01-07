function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnChangeColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");

btnChangeColor.addEventListener("click", function changeColor() {
  spanColor.textContent = getRandomHexColor();
  bodyColor.style.backgroundColor = spanColor.textContent;
});
