document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header .header__menu");

  function toggleSideMenu() {
    document.querySelector(".side-menu").classList.toggle("side-menu_hide");
    document.querySelector(".container-lg").classList.toggle("side-menu-hide");
  }

  menuButton.addEventListener("click", toggleSideMenu);
});
