document.getElementById("searchBtn").addEventListener("click", searchShop);
document.getElementById("search").addEventListener("keypress", function (e) {
  if (e.key === "Enter") searchShop();
});

function searchShop() {
  const keyword = document.getElementById("search").value.trim().toLowerCase();
  const shopList = document.querySelectorAll(".shop-list");

  shopList.forEach((shop) => {
    const name = shop.querySelector(".shop-name").textContent.toLowerCase();
    const address = shop
      .querySelector(".shop-address")
      .textContent.toLowerCase();

    // キーワードが含まれているか？
    const isMatch = name.includes(keyword) || address.includes(keyword);

    // 表示/非表示
    shop.style.display = isMatch ? "block" : "none";
  });
}
