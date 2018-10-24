// JavaScript for my cat clicker application
// Now using MVO (a.k.a. MVC a.k.a. MV*)
// October 21, 2018

// TODO look for inspiration @ https://github.com/udacity/ud989-cat-clicker-premium-vanilla
// TODO update to meet Cat Clicker Professional Pro specs @
// https://classroom.udacity.com/nanodegrees/nd001/parts/b29af831-fa50-4fe9-b30d-ad48476664d1/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3437288625/concepts/35309290390923

// DOM ELEMENTS
const CAT_NAME = document.getElementById("catName");
const CAT_CLICKS = document.getElementById("catClicks");
const CAT_IMG = document.getElementById("catImg");
const ADMIN_BUTTON = document.getElementById("adminButton");
const ADMIN_AREA = document.getElementById("adminArea");
const SAVE_BUTTON = document.getElementById("saveButton");
const CANCEL_BUTTON = document.getElementById("cancelButton");


// MODEL
let model = {
  // Current cat
  currentCat: null, // Current cat

  // Cats
  cats: [{
    name: "Ghost",
    clicks: 0,
    src: "./img/cat1.jpg",
    altText: "Cat. Thanks to NeONBRAND for the photo via https://unsplash.com/photos/UETa8mfu38k."
  },
  {
    name: "Candy",
    clicks: 0,
    src: "./img/cat2.jpg",
    altText: "Cat. Thanks to Cat Mapper (Max Ogden) for the photo via https://unsplash.com/photos/EcsCeS6haJ8."
  },
  {
    name: "Gift",
    clicks: 0,
    src: "./img/cat3.jpg",
    altText: "Cat. Thanks to Timothy Meinberg for the photo via https://unsplash.com/photos/b079C-_tUbM."
  },
  {
    name: "Pearl",
    clicks: 0,
    src: "./img/cat4.jpg",
    altText: "Cat. Thanks to Mikhail Vasilyev for the photo via https://unsplash.com/photos/NodtnCsLdTE."
  },
  {
    name: "Irma",
    clicks: 0,
    src: "./img/cat5.jpg",
    altText: "Cat. Thanks to Kari Shea for the photo via https://unsplash.com/photos/eMzblc6JmXM."
  }]
};

// OCTOPUS
let octopus = {
  // Initiatlizes the octopus
  init: function () {
    // Initiatize model
    model.currentCat = model.cats[0];

    // Initialize view
    view_cat.init(model.currentCat);

    // Add cat image event listener
    CAT_IMG.addEventListener('click', function () {
      model.currentCat.clicks += 1;
      view_cat.render(model.currentCat);
    });

    // Initialize menu
    view_menu.init(model.cats);

    // Add menu event listeners
    for (let i = 0; i < model.cats.length; i++) {
      let menuItem = document.querySelectorAll("li")[i];
      menuItem.addEventListener('click', function () {
        view_cat.render(model.cats[i]);
        model.currentCat = model.cats[i];
        ADMIN_AREA.classList.add('hideAdminArea');
      });
    }

    // Add admin button event listener
    ADMIN_BUTTON.addEventListener('click', function () {
      ADMIN_AREA.classList.remove('hideAdminArea');
      document.getElementById('input_name').value = model.currentCat.name;
      document.getElementById('input_src').value = model.currentCat.src;
      document.getElementById('input_clicks').value = model.currentCat.clicks;
      ADMIN_BUTTON.disabled = true;
    });

    // Add save button event listener
    SAVE_BUTTON.addEventListener('click', function () {
      model.currentCat.name = document.getElementById('input_name').value;
      model.currentCat.src = document.getElementById('input_src').value;
      model.currentCat.clicks = Number(document.getElementById('input_clicks').value);
      ADMIN_AREA.classList.add('hideAdminArea');
      ADMIN_BUTTON.disabled = false;
      view_cat.render(model.currentCat);
    });

    // Add Cancel button event listener
    CANCEL_BUTTON.addEventListener('click', function () {
      ADMIN_AREA.classList.add('hideAdminArea');
      ADMIN_BUTTON.disabled = false;
    });
  },

  // Update cat
  updateCat: function (name, url, clicks) {
    model.currentCat.name = name;
    model.currentCat.url = url;
    model.currentCat.clicks = clicks;
  }
}

// CAT VIEW
let view_cat = {
  init: function (cat) {
    // Set values
    CAT_NAME.innerText = cat.name;
    CAT_CLICKS.innerText = cat.clicks;
    CAT_IMG.src = cat.src;
    CAT_IMG.alt = cat.altText;
  },
  render: function (cat) {
    // Set values
    CAT_NAME.innerText = cat.name;
    CAT_CLICKS.innerText = cat.clicks;
    CAT_IMG.src = cat.src;
    CAT_IMG.alt = cat.altText;
  },
  renderClicks: function (cat) {
    CAT_CLICKS.innerText = cat.clicks;
  }
};

// MENU VIEW
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