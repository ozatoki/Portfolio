//四則演算子　( +　-　*　/ % )
const test_1 = 4;
const test_2 = 3;

const test_3 = test_1 + test_2;

console.log(test_3);

const test_4 = test_1 % test_2;
//3つに分けたい
/*1
2
3・・・あまりが0
4
5
6・・・あまりが0
*/
console.log(test_4);

//代入演算子
let test_5 = 5;
test_5 += 5;
console.log(test_5);
//＊constは代入演算子(+=)は使えない
