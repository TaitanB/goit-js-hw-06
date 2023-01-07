const inputEl = document.querySelector("#name-input");
// console.log(inputEl.value);

const spanEl = document.querySelector("#name-output");
// console.log(spanEl.textContent);

inputEl.addEventListener("input", function () {
  inputEl.value === ""
    ? (spanEl.textContent = "Anonymous")
    : (spanEl.textContent = inputEl.value);
  // console.log(spanEl.textContent);
});
