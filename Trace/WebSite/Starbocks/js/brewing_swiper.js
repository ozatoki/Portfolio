const prevBtn = document.querySelector(".swiper-prev");
const nextBtn = document.querySelector(".swiper-next");

const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 4,
  loop: false,
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
});

// 初期表示
prevBtn.style.display = "none";

swiper.on("slideChange", () => {
  const lastIndex = swiper.slides.length - 1;
  const currentIndex = swiper.activeIndex;

  // 左ボタン
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  // 右ボタン
  nextBtn.style.display = currentIndex === lastIndex ? "none" : "block";
});
