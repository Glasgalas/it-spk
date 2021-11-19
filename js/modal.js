const refs = {
  modal: document.querySelector("[data-modal]"),
  menu: document.querySelector("[data-menu]"),
  opnMdlBtn: document.getElementById("modal-btn"),
  opnMdlBtn2: document.getElementById("modal-btn2"),
  opnMdlBtn3: document.getElementById("modal-btn3"),
  clsMdlBtn: document.getElementById("modal-btn-close"),
  opnMenuBtn: document.getElementById("menu-btn"),
  opnMenuBarBtn: document.getElementById("menu-bar-btn"),
  clsMenuBtn: document.getElementById("menu-btn-close"),
  linkMenu1: document.getElementById("link1"),
  linkMenu2: document.getElementById("link2"),
  linkMenu3: document.getElementById("link3"),
};

refs.opnMdlBtn.addEventListener("click", toggleModal);
refs.opnMdlBtn2.addEventListener("click", toggleModal);
refs.opnMdlBtn3.addEventListener("click", toggleModal);
refs.clsMdlBtn.addEventListener("click", toggleModal);
refs.opnMenuBtn.addEventListener("click", toggleMenu);
refs.opnMenuBarBtn.addEventListener("click", toggleMenu);
refs.clsMenuBtn.addEventListener("click", toggleMenu);
refs.linkMenu1.addEventListener("click", toggleMenu);
refs.linkMenu2.addEventListener("click", toggleMenu);
refs.linkMenu3.addEventListener("click", toggleMenu);

function toggleModal() {
  refs.modal.classList.toggle("is-hidden");
}

function toggleMenu() {
  refs.menu.classList.toggle("is-hidden");
}
