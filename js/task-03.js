const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// images.forEach((element) => {
//   const imageList = document.querySelector(".gallery");
//   // console.log(imageList.style);

//   imageList.insertAdjacentHTML(
//     "beforeend",
//     `<li><img class = "image" src = "${element.url}" alt = "${element.alt}"/></li>`
//   );
//   // console.log(imageList);
// });

const imageList = document.querySelector(".gallery");

const image = function (element) {
  return `
  <li>
    <img class = "image" src = "${element.url}" alt = "${element.alt}"/>
  </li>
  `;
};

const list = images.map(image).join("");

imageList.insertAdjacentHTML("beforeend", list);
console.log(imageList);
