const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// ingredients.forEach((element) => {
//   const ingredient = document.createElement("li");
//   ingredient.classList.add("item");
//   ingredient.textContent = element;
//   // console.log(ingredient);

//   const ingredientsList = document.querySelector("#ingredients");
//   ingredientsList.append(ingredient);
//   // console.log(ingredientsList);
// });

//
//
//

const ingredientsList = document.querySelector("#ingredients");

const ingredientItem = ingredients.map((element) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = element;
  ingredient.classList.add("item");
  console.log(ingredient);
  return ingredient;
});

ingredientsList.append(...ingredientItem);
console.log(ingredientsList);
