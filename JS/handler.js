/// change texts by click

document
  .getElementById("btn-update-title")
  .addEventListener("click", function () {
    const pageTitleElement = document.getElementById("page-title");
    pageTitleElement.innerText = "Updated page title text";
  });

document.getElementById("btn-login").addEventListener("click", function () {
  const userInfo = document.getElementById("user-info");
  userInfo.innerText = "user logged in";
});


/// handle input text


document.getElementById("update-btn").addEventListener("click", function () {
  const nameInput = document.getElementById("input-name");
  const name = nameInput.value;
  const nameP = document.getElementById("name");
  nameP.innerText = name;
});
