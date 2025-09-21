// document.getElementById('btn-mouse') .addEventListener('mouseenter', function() {
//     console.log("event triggered")
// });
//   document
//     .getElementById("btn-mouse")
//     .addEventListener("mousemove", function () {
//       console.log("event triggered");
//     });
//   document
//     .getElementById("btn-mouse")
//     .addEventListener("mouseout", function () {
//       console.log("event triggered");
//     });

// document.getElementById("user-name").addEventListener("focus", function () {
//   console.log("user about to write name");
// });
// document.getElementById("user-email").addEventListener("focus", function () {
//   console.log("user about to write email");
// });
// document.getElementById("user-name").addEventListener("blur", function () {
//   console.log("user done with name");
// });
// document.getElementById("user-email").addEventListener("blur", function () {
//   console.log("user done with email");
// });
document
  .getElementById("user-name")
  .addEventListener("keyup", function (event) {
    console.log("typing", event.target.value);
  });
