const infoWrapper = document.getElementById("infoWrapper");
const infocomment = document.getElementById("infocomment");
const animalWrapper = document.getElementById("animalWrapper");
const animalcomment = document.getElementById("animalcomment");

// お知らせをクリックした時
infoWrapper.addEventListener("click", () => {
  infoWrapper.style.zIndex = 200;
  infocomment.style.zIndex = 190;
  animalWrapper.style.zIndex = 10;
  animalcomment.style.zIndex = 0;
});

// 動物情報をクリックした時
animalWrapper.addEventListener("click", () => {
  animalWrapper.style.zIndex = 200;
  animalcomment.style.zIndex = 190;
  infoWrapper.style.zIndex = 10;
  infocomment.style.zIndex = 0;
});
