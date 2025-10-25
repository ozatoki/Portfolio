//ユーザー定義関数
//引数なし 戻り値なし
function test() {
  console.log("テスト");
}
test();

//引数あり　戻り値なし
function getComment(string) {
  console.log(string);
}
getComment("コメント");

//引数なし 戻り値あり
function getNumberOfComment() {
  return 5;
}
//getNumberOfComment();
console.log(getNumberOfComment());

//引数2つ 戻り値あり
function sumPrice(int1, int2) {
  let int3 = int1 + int2;
  return int3;
}
const total = sumPrice(3, 5);
console.log(total);

//定義関数⬇︎
const test_2 = "テスト";
const test_3 = "です";
console.log(test_2.concat(test_3));

//文字列⬇︎
//trim(両橋から空白を取り除く)
const greeting = " Hello world! ";
console.log(greeting);
console.log(greeting.trim());
//' Hollo world! '
//'Hollo world

//substring(○文字目から○文字だけ取り出す)
const str = "Mozilla";
console.log(str.substring(1, 3));
console.log(str.substring(2));
//oz
//zilla

//replace(置き換え) 正規表現が使える。(文字列のパターンを表すルール)
const test_4 = "テストです";
console.log(test_4.replace("テスト", "ファイト"));
//ファイトです
//文字列⬆︎

//Map(連想配列)
const myMap = new Map();
myMap.set("id", 3);
myMap.set("name", "本田");
console.log(myMap);
//Map(2) {'id' => 3, 'name' => '本田'}
console.log(myMap.get("name"));
//本田

const valueList = myMap.values();
for (value of valueList) {
  console.log(value);
}
//3 本田

//Array(連想配列)
//const fruits = new Array();
const fruits = ["りんご", "バナナ"]; //配列の場合は[]で作る(シンタックス)
console.log(fruits);
fruits.push("みかん"); //pushで追加
console.log(fruits);

//コールバック関数Array+fprEach(与えたれた関数を配列の各要素に対して一度ずつ実行する)
fruits.forEach(function (input) {
  console.log(input);
});

//アロー関数
//関数名あり
const getItem = () => {
  console.log("アロー");
};
getItem();

fruits.forEach((input) => {
  console.log(input);
});

//関数名なし
fruits.forEach((input) => console.log(input));

//Array.filter 配列の中から条件に合うものだけ取り出すメソッド
const scores = [10, 20, 30, 40];
const newScores = scores.filter((value) => {
  return value >= 30;
});
console.log(newScores);

//Array.find 条件に合う最初の要素だけ見つけるメソッド
const members = ["本田", "香川", "長友"];
const member = members.find((value) => value === "長友");
console.log(member);

//Array.map 配列を元に新しい配列を作るメソッド
const userList = [10, 20, 30, 40];
//テンプレート文字列 `&{}` バッククォオート ※{}の中に変数、定数を入れると文章とくっつけることができる⬇︎use_にvalueがくっつく
const userIdList = userList.map((value) => {
  return `user_${value}`;
});
console.log(userIdList);
console.table(userIdList); //Array(配列)の場合はtableで表での表示も可能
