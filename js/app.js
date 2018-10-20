let CAT1_CLICKS = 0;
let CAT2_CLICKS = 0;

let CAT1_NAME = "Ghost";
let CAT2_NAME = "Candy";

const CAT1 = document.getElementById("catImage1");
const CAT2 = document.getElementById("catImage2");

document.getElementById("catName1").innerText = CAT1_NAME;
document.getElementById("catName2").innerText = CAT2_NAME;

CAT1.addEventListener(
  "click",
  function() {
    CAT1_CLICKS += 1;
    document.getElementById("catClicks1").innerText = CAT1_CLICKS;
  },
  false
);

CAT2.addEventListener(
  "click",
  function() {
    CAT2_CLICKS += 1;
    document.getElementById("catClicks2").innerText = CAT2_CLICKS;
  },
  false
);

// document.images[0].addEventListener("click", function(event) {
//   // console.log(event.target);
//   // console.log(event);
//   CAT_CLICKS += 1;
//   document.getElementById("clicks").innerText = CAT_CLICKS;
// });



// SAMPLE CODE
// FROM https://classroom.udacity.com/nanodegrees/nd001/parts/b29af831-fa50-4fe9-b30d-ad48476664d1/modules/4db0b091-fc81-40c2-b7f0-a4ded06480e1/lessons/3417188540/concepts/34803486710923

// clear the screen for testing
document.body.innerHTML = '';

var nums = [1,2,3];

// // Let's loop over the numbers in our array
// for (var i = 0; i < nums.length; i++) {

//     // This is the number we're on...
//     var num = nums[i];

//     // We're creating a DOM element for the number
//     var elem = document.createElement('div');
//     elem.textContent = num;

//     // ... and when we click, alert the value of `num`
//     elem.addEventListener('click', (function(numCopy) {
//         return function() {
//             alert(numCopy);
//         };
//     })(num));

//     // // ... because this version does not work:
//     //     // ... and when we click, alert the value of `num`
//     //     elem.addEventListener('click', function() {
//     //       alert(num);
//     //   });

//     document.body.appendChild(elem);
// };