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

/*==================== SCROLL REVEAL ANIMATION ====================*/
const sr__top = ScrollReveal({
  origin: "bottom",
  distance: "30px",
  duration: 2000,
  reset: false,
});

sr__top.reveal(
  `.hero,.banner-logo,
  .banner-title,.banner-text,
  .banner-btn,.banner-box,.hero-image,
  .listSection,.pictureSection,.utilities-heading,.utilities-content,.utilities-box,
  .slogan-title,.slogan-content,.slogan-btn,.contact-title,.contact-text,.contact-input,
  .contact-btn,.footer `,
  {
    interval: 200,
  }
);
