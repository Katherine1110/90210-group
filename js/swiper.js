const swiper1 = new Swiper('.slideshow .swiper', {
  grabCursor: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  spaceBetween: 30,
});

const swiper2 = new Swiper('.products__items.swiper', {
  grabCursor: true,

  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
