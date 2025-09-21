// const items = document.getElementsByClassName("item");
// for (const item of items) {
//   item.addEventListener("click", function (event) {
//     //   console.log(event.target.parentNode);
//     event.target.parentNode.removeChild(event.target);
//   });
// }
document
  .getElementById("item-list")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });

document.getElementById("btn-add-item").addEventListener("click", function () {
  const ol = document.getElementById("item-list");
  const li = document.createElement("li");
  li.innerText = "brand new item added";
  li.classList.add("item");
  ol.appendChild(li);
});
