const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const btnMenuMobile = document.querySelector(".button__mobile");
btnMenuMobile.addEventListener('click', appearMenuMobile)

var isAppearMenuMobile = false

function appearMenuMobile() {
  isAppearMenuMobile = !isAppearMenuMobile
  var menuMobile = document.getElementById('navbar__menu')
  var iconMenuMobile = document.getElementById('btn__mobile')
  if (isAppearMenuMobile) {
    menuMobile.classList.add('menu-mobile')
    iconMenuMobile.classList.remove('fa-bars-staggered')
    iconMenuMobile.classList.add('fa-arrow-right')
  }
  else {
    menuMobile.classList.remove('menu-mobile')
    iconMenuMobile.classList.remove('fa-arrow-right')
    iconMenuMobile.classList.add('fa-bars-staggered')
  }
}