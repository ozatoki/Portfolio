//条件分岐

const height = 91;
if (height === 90) {
  console.log("身長は" + height + "cmです");
}
// ==　 一致
// ===　型も一致

/*if (条件){
   条件が真なら実行
  } else {
 条件が偽なら実行
  } */

if (height === 90) {
  console.log("身長は" + height + "cmです");
} else {
  console.log("身長は90cmではありません");
}

//else if
const signal = "blue";

if (signal === "red") {
  console.log("止まれ");
} else if (signal === "yellow") {
  console.log("一旦停止");
} else {
  console.log("進む");
}

//ifの中にif

const speed = 60;
if (signal === "blue") {
  if (speed >= 60) {
    console.log("スピード違反");
  }
}

// &&(AND)どちらも満たす場合

const signal_1 = "red";
const signal_2 = "blue";

if (signal_1 === "red" && signal_2 === "blue") {
  console.log("赤と青");
}

//||(OR)片方満たす場合
const signal_3 = "red";
const signal_4 = "blue";

if (signal_3 === "red" || signal_4 === "blue") {
  console.log("赤");
}

//三項演算子
//条件 ? 真 : 偽

const score = 80;
const comment = score > 80 ? "good" : "not good";
console.log(comment);
