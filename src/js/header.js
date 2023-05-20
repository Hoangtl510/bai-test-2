const header = document.querySelector(".header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const btnMenuMobile = document.querySelector(".header-button__mobile");
btnMenuMobile.addEventListener('click', appearMenuMobile)

var isAppearMenuMobile = false

function appearMenuMobile() {
  isAppearMenuMobile = !isAppearMenuMobile
  var menuMobile = document.getElementById('navbar__menu')
  var iconMenuMobile = document.getElementById('button-mobile')
  var btnHeaderMobile = document.getElementById('button-sign-up__mobile')
  if (isAppearMenuMobile) {
    menuMobile.classList.add('menu-mobile')
    iconMenuMobile.classList.remove('fa-bars-staggered')
    iconMenuMobile.classList.add('fa-arrow-right')
    btnHeaderMobile.classList.add('header-button-sign-up__mobile')
  }
  else {
    menuMobile.classList.remove('menu-mobile')
    iconMenuMobile.classList.remove('fa-arrow-right')
    iconMenuMobile.classList.add('fa-bars-staggered')
    btnHeaderMobile.classList.remove('header-button-sign-up__mobile')
  }
}