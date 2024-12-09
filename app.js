let navbar = document.querySelector(".navbar");
let btnToggle = document.querySelector("#btn-toggle");
let search = document.querySelector(".bx-search");

btnToggle.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menuBtnChange();
});

search.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (navbar.classList.contains("open")) {
    btnToggle.classList.replace("bx-menu", "bx-left-arrow");
  } else {
    btnToggle.classList.replace("bx-left-arrow", "bx-menu");
  }
}
