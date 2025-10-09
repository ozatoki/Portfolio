const swiperBrewing = new Swiper(".swiperBrewing", {
  slidesPerView: "auto", // 自動幅
  spaceBetween: 4, // スライド間の余白
  loop: false,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  on: {
    slideChange: function () {
      // 現在のスライドだけ show クラスを付ける
      const slides = document.querySelectorAll(".swiperBrewing .swiper-slide");
      slides.forEach((slide, index) => {
        slide.classList.remove("show");
      });
      const activeIndex = this.activeIndex;
      slides[activeIndex].classList.add("show"); // アクティブ
      if (slides[activeIndex + 1])
        slides[activeIndex + 1].classList.add("show"); // 次も半分見せ
    },
  },
});
