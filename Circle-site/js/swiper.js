document.querySelectorAll('.swiper').forEach((el) => {
  new Swiper(el, {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  
  // If we need pagination
  pagination: {
    el: el.querySelector('.swiper-pagination'),
  },

  // Navigation arrows
  navigation: {
    nextEl: el.querySelector('.swiper-button-next'),
    prevEl: el.querySelector('.swiper-button-prev'),
  },

  // And if we need scrollbar
  scrollbar: {
    el: el.querySelector('.swiper-scrollbar'),
    hide: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  },
});
});
