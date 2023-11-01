const menu = document.querySelector(".menu");
const OpenMenu = document.querySelector(".menu-mobile");
const CLoseMenu = document.querySelector(".menu-close");

OpenMenu.addEventListener("click", () => {
  menu.classList.add("mobilemenu");
});

CLoseMenu.addEventListener("click", () => {
  menu.classList.remove("mobilemenu");
});

/*==================== ScrollTop ====================*/

const scrollTop = () => {
  const scrollTop = document.getElementById("scroll-top");
  if (window.scrollY >= 560) {
    scrollTop.classList.add("show-scroll");
  } else {
    scrollTop.classList.remove("show-scroll");
  }
};

window.addEventListener("scroll", scrollTop);
