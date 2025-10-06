const prevBtn = document.querySelector(".brewing-prev");
const nextBtn = document.querySelector(".brewing-next");

const swiperBrewing = new Swiper(".swiperBrewing", {
  slidesPerView: "auto",
  spaceBetween: 4,
  loop: false,
  navigation: {
    nextEl: ".brewing-next",
    prevEl: ".brewing-prev",
  },
});

// 初期表示
prevBtn.style.display = "none";

swiperBrewing.on("slideChange", () => {
  const lastIndex = swiperBrewing.slides.length - 1;
  const currentIndex = swiperBrewing.activeIndex;

  // 左ボタン
  prevBtn.style.display = currentIndex === 0 ? "none" : "block";
  // 右ボタン
  nextBtn.style.display = currentIndex === lastIndex ? "none" : "block";
});
