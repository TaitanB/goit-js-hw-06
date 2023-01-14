const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

console.log(spanText.style.fontSize);

inputRange.addEventListener("input", function (event) {
  // spanText.style.fontSize = `${inputRange.value}px`;

  spanText.style.fontSize = event.currentTarget.value + "px";
  // console.log(inputRange.value);
  // console.log(spanText.style.fontSize);
  // spanText.style.fontSize = `${inputRange.value}px`;
});
