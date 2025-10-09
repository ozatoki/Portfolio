const swiperStories = new Swiper(".swiper-stories", {
  slidesPerView: "auto", // 画面幅に応じて調整
  spaceBetween: 12,
  centeredSlides: false,
  loop: false,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  speed: 600,
});
