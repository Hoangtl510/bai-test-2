var pbSwiper = new Swiper('.pb-swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
        slidesPerView: 1,
    },
    575: {
      slidesPerView: 2,
    },
    768: {
        slidesPerView: 2.3,
    },
    992: {
        slidesPerView: 3.2,
    },
},
  on: {
    resize: function () {
      pbSwiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 2 ? 'vertical' : 'horizontal';

  return direction;
}

var prSwiper = new Swiper('.pr-swiper', {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    300: {
        slidesPerView: 1,
    },
    479: {
      slidesPerView: 2,
    },
    768: {
        slidesPerView: 3,
    }
},
  on: {
    resize: function () {
      prSwiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 2 ? 'vertical' : 'horizontal';

  return direction;
}
