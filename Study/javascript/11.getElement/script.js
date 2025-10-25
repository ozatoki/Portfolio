const test = document.getElementById("test");
test.classList.add("red");
//戻り値 Element
const testList = document.querySelector(".test_list");
//戻り値 Element
testList.classList.remove("blue");
const testLists = document.querySelectorAll(".test_list");

console.log(test);
console.log(testList);
console.log(testLists);

//1つ目 HTMLにonclickと設定する
function change_color() {
  const test = document.getElementById("test");
  test.textContent = "テスト";
  test.classList.add("red");
}
//2つ目 JSで設定　Element.onclick
document.getElementById("target").onclick = function () {
  const test = document.getElementById("test");
  test.textContent = "テスト";
  test.classList.add("red");
};
//3つ目 イベントリスナー
const target = document.getElementById("target");
target.addEventListener("click", () => {
  const test = document.getElementById("test");
  test.textContent = "テスト";
  test.classList.add("red");
});

// モーダルウィンドウ
