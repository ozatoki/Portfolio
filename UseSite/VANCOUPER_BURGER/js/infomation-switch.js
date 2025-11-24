const infoBtn = document.getElementById("infomation-switch");
const prBtn = document.getElementById("pressrelease-switch");
const infoContent = document.getElementById("infomation-detail");
const prContent = document.getElementById("pressrelease-detail");

// 初期表示
infoBtn.classList.add("active");
infoContent.classList.add("active-content");

// ボタン切り替え
infoBtn.addEventListener("click", () => {
  infoBtn.classList.add("active");
  prBtn.classList.remove("active");

  infoContent.classList.add("active-content");
  prContent.classList.remove("active-content");
});

prBtn.addEventListener("click", () => {
  prBtn.classList.add("active");
  infoBtn.classList.remove("active");

  prContent.classList.add("active-content");
  infoContent.classList.remove("active-content");
});
