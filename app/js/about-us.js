new Swiper('.about-us-portfolio__swiper', {
  slidesPerView: 1,
  spaceBetween: 16,
  grid: {
    fill: 'row',
    rows: 3,
  },
  navigation: {
    prevEl: '.about-us-portfolio__swiper-prev',
    nextEl: '.about-us-portfolio__swiper-next',
  },
  breakpoints: {
    760: {
      grid: {
        fill: 'row',
        rows: 1,
      }
    }
  }
})

new Swiper('.about-us-team__swiper', {
  slidesPerView: 1.2,
  spaceBetween: 12,
  navigation: {
    prevEl: '.about-us-portfolio__swiper-prev',
    nextEl: '.about-us-portfolio__swiper-next',
  },
  breakpoints: {
    540: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 3,
    },
    1160: {
      slidesPerView: 4,
      grid: {
        fill: 'row',
        rows: 2,
      },
      spaceBetween: 16,
    }
  }
})