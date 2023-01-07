const categoriesTotal = document.querySelectorAll(".item");
console.log("Number of categories: ", categoriesTotal.length);

categoriesTotal.forEach((element) => {
  const itemTitle = element.querySelector("h2");
  console.log("Category: ", itemTitle.textContent);

  const itemList = element.querySelector("ul");
  console.log("Elements: ", itemList.children.length);
});
