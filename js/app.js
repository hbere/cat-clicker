// JavaScript to run my cat clicker application
// October 20, 2018

class Cat {
  // attributes
  constructor(catName, imgLoc, imgAlt) {
    let name = catName;
    let img = imgLoc;
    let altText = imgAlt;
    let clicks = 0;
  }

  // methods
  click() {
    CAT1_CLICKS += 1;
    document.getElementById("catClicks1").innerText = CAT1_CLICKS;
  }
}

let cat1 = new Cat('Ghost', './img/cat1.jpg', 'Cat. Thanks to poplinre for the photo via https://www.flickr.com/photos/poplinre/625069434/in/photostream/.');
let cat2 = new Cat('Candy', './img/cat2.jpg', 'Cat. Thanks to chewie for the photo via https://www.flickr.com/photos/chewie/2290467335.');
let cat3 = new Cat('Ghost', './img/cat3.jpg', 'Cat. 3');
let cat4 = new Cat('Ghost', './img/cat4.jpg', 'Cat. 4');
let cat5 = new Cat('Ghost', './img/cat5.jpg', 'Cat. 5');

CAT.addEventListener(
  "click",
  function() {
    CAT1_CLICKS += 1;
    document.getElementById("catClicks1").innerText = CAT1_CLICKS;
  },
  false
);