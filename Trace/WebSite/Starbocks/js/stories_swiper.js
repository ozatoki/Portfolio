const storiesPrev = document.querySelector(".stories-prev");
const storiesNext = document.querySelector(".stories-next");

const swiperStories = new Swiper(".swiper-stories", {
  slidesPerView: "auto",
  spaceBetween: 8,
  loop: false,
  navigation: {
    nextEl: ".stories-next",
    prevEl: ".stories-prev",
  },
});

// 初期表示
storiesPrev.style.display = "none";

swiperStories.on("slideChange", () => {
  const lastIndex = swiperStories.slides.length - 1;
  const currentIndex = swiperStories.activeIndex;

  // 左ボタン
  storiesPrev.style.display = currentIndex === 0 ? "none" : "block";
  // 右ボタン
  storiesNext.style.display = currentIndex === lastIndex ? "none" : "block";
});
