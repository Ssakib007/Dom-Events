// console.log("external file");

// option 2 to handle events -- by calling a function

function makeYellow() {
  document.body.style.backgroundColor = "yellow";
}
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//option 3 to handle events -- get element by id and set onclick
const btnMakeBlue = document.getElementById("btn-make-blue");
btnMakeBlue.onclick = function makeBlue() {
  document.body.style.backgroundColor = "blue";
};

// option 3 to handle events different version
const btnMakePurple = document.getElementById("btn-make-purple");
function makePurple() {
  document.body.style.backgroundColor = "purple";
}
btnMakePurple.onclick = makePurple;

/// option 4 -- add event listener
//getElementByID.addEventListener
document
  .getElementById("btn-make-green")
  .addEventListener("click", function makeGreen() {
    document.body.style.backgroundColor = "green";
  });

document
  .getElementById("btn-make-gold")
  .addEventListener("click", function makeGold() {
    document.body.style.backgroundColor = "gold";
  });
