const addButton = document.querySelector(".addButton");

addButton.addEventListener("click", () => {
  document.getElementsByClassName("count")[0].innerText++;
});
