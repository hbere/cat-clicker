// JavaScript to run my cat clicker application
// Now using MVO (a.k.a. MVC a.k.a. MV*)
// October 21, 2018

let model = {
  init: function () {
    if (!localStorage.cats) {
      localStorage.cats = JSON.stringify([]);
    }
  },
  add: function (cat) {
    let data = JSON.parse(localStorage.cats);
    data.push(cat);
    localStorage.cats = JSON.stringify(data);
  },
  getAllCats: function () {
    return JSON.parse(localStorage.cats);
  }
};

let octopus = {
  currentCatIndex: 0,
  addNewCat: function (catName, src, altText) {
    model.add({
      name: catName,
      clicks: 0,
      src: src,
      altText: altText
    });
  },
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
  clickOnCat: function () {
    let cats = model.getAllCats();
    this.clicks += 1;
    CAT_CLICKS.innerText = this.clicks;
  },
  init: function () {
    let cats = model.getAllCats();

    // Initiatize model & add data
    model.init();
    this.addAllCats();

    // Initialize menu
    view_menu.init();

    // Initialize cat image
    let currentCat = cats[this.currentCatIndex];
    view_cat.init(currentCat);

    // Add cat image event listener
    CAT_IMG.addEventListener(
      "click",
      function () {
        octopus.clickOnCat();
      },
      false
    );
  }
}

let view_menu = {
  init: function () {
    let cats = model.getAllCats();

    // Draw menu
    for (cat of cats) {
      let myHTML = `<li>${cat.name}</li>`;
      document.querySelector("menu").innerHTML += myHTML;
    }

    // Add menu event listeners
    cats.forEach((cat, index) => {
      let menuItem = document.querySelectorAll("li")[index];
      // console.log(index);
      menuItem.addEventListener("click", function () {
        currentCat = cats[index];
        currentCat.load();
      });
    });
  }
};

let view_cat = {
  init: function (currentCat) {
    // Elements
    const CAT_NAME = document.getElementById("catName");
    const CAT_CLICKS = document.getElementById("catClicks");
    const CAT_IMG = document.getElementById("catImg");

    // Set values
    CAT_NAME.innerText = currentCat.name;
    CAT_CLICKS.innerText = currentCat.clicks;
    CAT_IMG.src = currentCat.src;
    CAT_IMG.alt = currentCat.altText;
  }
};

localStorage.clear();
octopus.init();