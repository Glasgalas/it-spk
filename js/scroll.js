const menuBar = document.querySelector(".menu-bar");

function scrollWin() {
  const scrolled = window.pageYOffset;
  const coords = document.documentElement.clientHeight;

  if (scrolled > coords) {
    menuBar.classList.add("bar-show");
  }
  if (scrolled < coords) {
    menuBar.classList.remove("bar-show");
  }
}

function backToTop() {
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", scrollWin);
