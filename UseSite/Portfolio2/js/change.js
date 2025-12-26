// window.addEventListener("load", () => {
//   setTimeout(() => {
//     document.body.classList.add("show");
//   }, 1500);
// });

// ① ページロード後に背景とコンテンツを表示
window.addEventListener("load", () => {
  setTimeout(() => {
    document.body.classList.add("show");
  }, 1500); // ← 好きな秒数
});

// ② スクロールフェードイン（今のままでOK）
const fadeTargets = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

fadeTargets.forEach((el) => observer.observe(el));
