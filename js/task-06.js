const inputEl = document.querySelector("#validation-input");

// console.log(inputEl.getAttribute("data-length"));

// const dataLength = inputEl.getAttribute("data-length");
// console.log(dataLength);

inputEl.addEventListener("blur", function () {
  //   const inputValue = inputEl.value;
  //   console.log(inputValue);
  //   const valueArr = inputValue.split("");
  //   console.log(valueArr);
  //   const arrLenght = valueArr.length;
  //   console.log(arrLenght);

  if (
    inputEl.value.split("").length ===
    Number(inputEl.getAttribute("data-length"))
  ) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
});
