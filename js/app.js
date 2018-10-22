// JavaScript for my cat clicker application
// Now using MVO (a.k.a. MVC a.k.a. MV*)
// October 21, 2018

// TODO look for inspiration @ https://github.com/udacity/ud989-cat-clicker-premium-vanilla
// TODO update to meet Cat Clicker Professional Pro specs @
// https://classroom.udacity.com/nanodegrees/nd001/parts/b29af831-fa50-4fe9-b30d-ad48476664d1/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3437288625/concepts/35309290390923

// DOM elements
const CAT_NAME = document.getElementById("catName");
const CAT_CLICKS = document.getElementById("catClicks");
const CAT_IMG = document.getElementById("catImg");
const ADMIN_BUTTON = document.getElementById("adminButton");
const CANCEL_BUTTON = document.getElementById("cancelButton");


// MVO
let model = {
  // Current cat
  currentCatIndex: 0, // Current cat index

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

  // Returns a cat
  getCat: function (index) {
    let data = JSON.parse(localStorage.cats);
    return data[index];
  },

  // Returns all cats
  getAllCats: function () {
    let data = JSON.parse(localStorage.cats);
    return data;
  },

  // Increments a cat's clicks
  incrementClicks: function (index) {
    let data = JSON.parse(localStorage.cats);
    data[index].clicks += 1;
    localStorage.cats = JSON.stringify(data);
  }
};

let octopus = {
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
      "Gift",
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
    model.incrementClicks(model.currentCatIndex);
    view_cat.render(model.getCat(model.currentCatIndex));
  },

  // Initiatlizes the octopus
  init: function () {
    // Initiatize model
    localStorage.removeItem('cats');
    model.init();

    // Load data
    this.addAllCats();

    // Initialize view
    let cat = model.getCat(model.currentCatIndex);
    view_cat.init(cat);

    // Add cat image event listener
    CAT_IMG.addEventListener('click', function () {
      octopus.clickOnCat(model.currentCatIndex);
    });

    // Initialize menu
    let cats = model.getAllCats();
    view_menu.init(cats);

    // Add menu event listeners
    cats.forEach((cat, index) => {
      let menuItem = document.querySelectorAll("li")[index];
      menuItem.addEventListener('click', (function (indexCopy) {
        return function () {
          model.currentCatIndex = indexCopy;
          view_cat.render(model.getCat(model.currentCatIndex));
        };
      })(index));
    });

    // Add Admin button event listener
    ADMIN_BUTTON.addEventListener('click', function () {
      document.getElementById("adminArea").classList.remove('hideAdminArea');
    });

    // Add Cancel button event listener
    ADMIN_BUTTCANCEL_BUTTONON.addEventListener('click', function () {
      document.getElementById("adminArea").classList.add('hideAdminArea');
    });
  }
}

let view_cat = {
  init: function (currentCat) {
    // Set values
    CAT_NAME.innerText = currentCat.name;
    CAT_CLICKS.innerText = currentCat.clicks;
    CAT_IMG.src = currentCat.src;
    CAT_IMG.alt = currentCat.altText;
  },
  render: function (currentCat) {
    // Set values
    CAT_NAME.innerText = currentCat.name;
    CAT_CLICKS.innerText = currentCat.clicks;
    CAT_IMG.src = currentCat.src;
    CAT_IMG.alt = currentCat.altText;
  }
};

let view_menu = {
  init: function (cats) {
    // Draw menu
    for (cat of cats) {
      let myHTML = `<li>${cat.name}</li>`;
      document.querySelector("ul").innerHTML += myHTML;
    }
  }
};


octopus.init();