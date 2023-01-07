function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputNumber = document.querySelector("#controls input");
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy");
const divBoxes = document.querySelector("#boxes");

// console.log(inputNumber);
// console.log(btnCreate);
// console.log(btnDestroy);
// console.log(divBoxes);

btnCreate.addEventListener("click", createBoxes);
btnDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  const initialSize = 30;

  for (let i = 0; i < (amount = inputNumber.value); i += 1) {
    // console.log(amount);
    const size = initialSize + i * 10;
    const div = document.createElement("div");
    div.style.width = `${size}px`;
    div.style.height = `${size}px`;
    div.style.background = getRandomHexColor();
    divBoxes.appendChild(div);
  }
}

function destroyBoxes() {
  divBoxes.innerHTML = "";
  inputNumber.value = "";
}
