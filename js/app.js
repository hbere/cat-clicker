// JavaScript to run my cat clicker application
// October 20, 2018

// Global variables
const CAT_NAME = document.getElementById("catName");
const CAT_CLICKS = document.getElementById("catClicks");
const CAT_IMG = document.getElementById("catImg");

// Define class Cat
class Cat {
  // attributes
  constructor(catName, src, altText) {
    this.name = catName;
    this.clicks = 0;
    this.src = src;
    this.altText = altText;
  }

  // methods
  click() {
    this.clicks += 1;
    CAT_CLICKS.innerText = this.clicks;
  }

  load() {
    CAT_NAME.innerText = this.name;
    CAT_CLICKS.innerText = this.clicks;
    CAT_IMG.src = this.src;
    CAT_IMG.alt = this.altText;
  }
}

// Define specific cats
let cats = new Array();
cats.push(
  new Cat(
    "Ghost",
    "./img/cat1.jpg",
    "Cat. Thanks to NeONBRAND for the photo via https://unsplash.com/photos/UETa8mfu38k."
  )
);
cats.push(
  new Cat(
    "Candy",
    "./img/cat2.jpg",
    "Cat. Thanks to Cat Mapper (Max Ogden) for the photo via https://unsplash.com/photos/EcsCeS6haJ8."
  )
);
cats.push(
  new Cat(
    "Lozada",
    "./img/cat3.jpg",
    "Cat. Thanks to Timothy Meinberg for the photo via https://unsplash.com/photos/b079C-_tUbM."
  )
);
cats.push(
  new Cat(
    "Pearl",
    "./img/cat4.jpg",
    "Cat. Thanks to Mikhail Vasilyev for the photo via https://unsplash.com/photos/NodtnCsLdTE."
  )
);
cats.push(
  new Cat(
    "Irma",
    "./img/cat5.jpg",
    "Cat. Thanks to Kari Shea for the photo via https://unsplash.com/photos/eMzblc6JmXM."
  )
);
let currentCat = cats[0];

// Add cat menu
(function() {
  for (cat of cats) {
    let myHTML = `<li>${cat.name}</li>`;
    document.querySelector("menu").innerHTML += myHTML;
  }
})();

// Add cat menu functionality
(function() {
  cats.forEach((cat, index) => {
    let menuItem = document.querySelectorAll("li")[index];
    // console.log(index);

    menuItem.addEventListener("click", function() {
      currentCat = cats[index];
      currentCat.load();
    });
  });
})();

// Event listener for when cat image is clicked
CAT_IMG.addEventListener(
  "click",
  function() {
    currentCat.click();
  },
  false
);

// // OLD
// // ... and when we click, alert the value of `num`
// CAT_IMG.addEventListener(
//   "click",
//   (function(currentCatCopy) {
//     return function() {
//       alert(currentCatCopy.clicks);
//     };
//   })(currentCat)
// );

// Load first cat
currentCat.load();

// // TEST SCRIPTS
// console.log(currentCat.name);
// console.log(currentCat.clicks);
// console.log(currentCat.src);
// console.log(currentCat.altText);
// console.log(cats[0].name);
// console.log(cats[0].clicks);
// console.log(cats[0].src);
// console.log(cats[0].altText);
// console.log(CAT_NAME.innerText);
// console.log(CAT_CLICKS.innerText);
// console.log(CAT_IMG.src);
// console.log(CAT_IMG.altText);
