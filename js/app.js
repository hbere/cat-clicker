// JavaScript for my cat clicker application
// Now using MVO (a.k.a. MVC a.k.a. MV*)
// October 21, 2018

// References:
  // Inspiration @ https://github.com/udacity/ud989-cat-clicker-premium-vanilla
  // Cat Clicker Professional Pro specs @ https://classroom.udacity.com/nanodegrees/nd001/parts/b29af831-fa50-4fe9-b30d-ad48476664d1/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3437288625/concepts/35309290390923

// TODO Add image alt text update function to Admin Menu
// TODO Add image attribution link/label for cat images


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
    altText: "Cat. Thanks to NeONBRAND for the photo via https://unsplash.com/photos/UETa8mfu38k.",
    index: 0
  },
  {
    name: "Candy",
    clicks: 0,
    src: "./img/cat2.jpg",
    altText: "Cat. Thanks to Cat Mapper (Max Ogden) for the photo via https://unsplash.com/photos/EcsCeS6haJ8.",
    index: 1
  },
  {
    name: "Gift",
    clicks: 0,
    src: "./img/cat3.jpg",
    altText: "Cat. Thanks to Timothy Meinberg for the photo via https://unsplash.com/photos/b079C-_tUbM.",
    index: 2
  },
  {
    name: "Pearl",
    clicks: 0,
    src: "./img/cat4.jpg",
    altText: "Cat. Thanks to Mikhail Vasilyev for the photo via https://unsplash.com/photos/NodtnCsLdTE.",
    index: 3
  },
  {
    name: "Irma",
    clicks: 0,
    src: "./img/cat5.jpg",
    altText: "Cat. Thanks to Kari Shea for the photo via https://unsplash.com/photos/eMzblc6JmXM.",
    index: 4
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
        view_admin.hide();
      });
    }

    // Add admin button event listener
    ADMIN_BUTTON.addEventListener('click', function () {
      view_admin.show(model.currentCat);
    });

    // Add save button event listener
    SAVE_BUTTON.addEventListener('click', function () {
      model.currentCat.name = document.getElementById('input_name').value;
      model.currentCat.src = document.getElementById('input_src').value;
      model.currentCat.clicks = Number(document.getElementById('input_clicks').value);
      view_menu.updateMenuItem(model.currentCat);
      view_cat.render(model.currentCat);
      view_admin.hide();
    });

    // Add Cancel button event listener
    CANCEL_BUTTON.addEventListener('click', function () {
      view_admin.hide();
    });
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
  },
  updateMenuItem: function (cat) {
    document.querySelectorAll('li')[cat.index].innerHTML = cat.name;
  }
};

// ADMIN VIEW
let view_admin = {
  show: function(cat) {
    document.getElementById('input_name').value = cat.name;
    document.getElementById('input_src').value = cat.src;
    document.getElementById('input_clicks').value = cat.clicks;
    ADMIN_AREA.classList.remove('hideAdminArea');
    ADMIN_BUTTON.disabled = true;
  },
  hide: function() {
    ADMIN_AREA.classList.add('hideAdminArea');
    ADMIN_BUTTON.disabled = false;
  }
};


octopus.init();