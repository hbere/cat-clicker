// JavaScript to run my cat clicker application
// Now using MVO (a.k.a. MVC a.k.a. MV*)
// October 21, 2018


// DOM elements
const CAT_NAME = document.getElementById("catName");
const CAT_CLICKS = document.getElementById("catClicks");
const CAT_IMG = document.getElementById("catImg");


// MVO
let model = {
  // Initiatlizes the data model
  init: function () {
    if (!localStorage.cats) {
      localStorage.cats = JSON.stringify([]);
    }
  },

  // Adds a cat
  add: function (cat) {
    let data = JSON.parse(localStorage.cats);
    data.push(cat);
    localStorage.cats = JSON.stringify(data);
  },

  // Returns a cat for use in the octopus
  getCat: function (index) {
    let data = JSON.parse(localStorage.cats);
    return data[index];
  },

  // Increments a cat's clicks
  incrementClicks: function (index) {
    let data = JSON.parse(localStorage.cats);
    data[index].clicks += 1;
    localStorage.cats = JSON.stringify(data);
  }
};

let octopus = {
  // Current cat index
  CURRENT_CAT_INDEX: 0,

  // Adds a new cat
  addNewCat: function (catName, src, altText) {
    model.add({
      name: catName,
      clicks: 0,
      src: src,
      altText: altText
    });
  },

  // Adds all cats - populates the database
  addAllCats: function () {
    this.addNewCat(
      "Ghost",
      "./img/cat1.jpg",
      "Cat. Thanks to NeONBRAND for the photo via https://unsplash.com/photos/UETa8mfu38k."
    );
    this.addNewCat(
      "Candy",
      "./img/cat2.jpg",
      "Cat. Thanks to Cat Mapper (Max Ogden) for the photo via https://unsplash.com/photos/EcsCeS6haJ8."
    );
    this.addNewCat(
      "Lozada",
      "./img/cat3.jpg",
      "Cat. Thanks to Timothy Meinberg for the photo via https://unsplash.com/photos/b079C-_tUbM."
    );
    this.addNewCat(
      "Pearl",
      "./img/cat4.jpg",
      "Cat. Thanks to Mikhail Vasilyev for the photo via https://unsplash.com/photos/NodtnCsLdTE."
    );
    this.addNewCat(
      "Irma",
      "./img/cat5.jpg",
      "Cat. Thanks to Kari Shea for the photo via https://unsplash.com/photos/eMzblc6JmXM."
    );
  },

  // Clicks on a cat
  clickOnCat: function () {
    model.incrementClicks(this.CURRENT_CAT_INDEX);
    view_cat.render(model.getCat(this.CURRENT_CAT_INDEX));
  },

  // Initiatlizes the octopus
  init: function () {
    // Initiatize model
    model.init();

    // Load data
    this.addAllCats();

    // Initialize view
    let cat = model.getCat(this.CURRENT_CAT_INDEX);
    view_cat.init(cat);
  }
}

let view_cat = {
  init: function (currentCat) {
    // Set values
    CAT_NAME.innerText = currentCat.name;
    CAT_CLICKS.innerText = currentCat.clicks;
    CAT_IMG.src = currentCat.src;
    CAT_IMG.alt = currentCat.altText;

    // Add cat image event listener
    CAT_IMG.addEventListener(
      "click",
      function () {
        octopus.clickOnCat();
      },
      false
    );
  },
  render: function (currentCat) {
    // Set values
    CAT_NAME.innerText = currentCat.name;
    CAT_CLICKS.innerText = currentCat.clicks;
    CAT_IMG.src = currentCat.src;
    CAT_IMG.alt = currentCat.altText;
  }
};


localStorage.clear();
octopus.init();