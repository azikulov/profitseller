document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".header .header__menu");
  const sideMenu = document.querySelector(".side-menu");
  const containerLarge = document.querySelector(".container-lg");

  function toggleSideMenu() {
    sideMenu.classList.toggle("side-menu_hide");
    containerLarge.classList.toggle("side-menu-hide");
  }

  menuButton.addEventListener("click", toggleSideMenu);

  // Mobile functions
  const closeSideMenuButton = document.querySelector(
    ".side-menu .side-menu__close"
  );

  function closeSideMenu() {
    if (window.screen.width <= 768) {
      sideMenu.classList.add("side-menu_hide")
    }
  }

  closeSideMenuButton.addEventListener("click", closeSideMenu);
});
