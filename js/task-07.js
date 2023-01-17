const inputRange = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");

spanText.style.fontSize = `${inputRange.value}px`;

inputRange.addEventListener("input", function (event) {
  spanText.style.fontSize = event.currentTarget.value + "px";
  // console.log(spanText.style.fontSize);
});
