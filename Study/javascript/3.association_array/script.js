//連想配列
//オブジェクト
const member = {
  //キー: バリュー
  name: "本田",
  height: 170,
  hobby: "サッカー",
};
console.log(member);
//console.log(member["name"]); にするとname=本田が取得できる
//[]ではなくて.でも良い＊ルールあり

const member_2 = {
  本田: {
    height: 170,
    hobby: "サッカー",
  },
  香川: {
    height: 165,
    hobby: "サッカー",
  },
};
console.log(member_2["香川"]["height"]);

const member_3 = {
  "1kumi": {
    本田: {
      height: 170,
      hobby: "サッカー",
    },
    香川: {},
  },
  "2kumi": {},
};

console.log(member_3["1kumi"]["本田"]["hobby"]);
//1kumiの本田のhobbyが取得できる
