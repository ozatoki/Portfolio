const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3000,     // 3秒ごとにスライド
    disableOnInteraction: false  // ユーザーが操作しても止まらない
  },

  pagination: {
    el: '.swiper-pagination',
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  scrollbar: {
    el: '.swiper-scrollbar',
  },
});