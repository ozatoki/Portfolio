console.log(100 + 5);

//文字列
console.log('りんご');
console.log("'りんご'と'みかん'");

//数値
console.log(100);
console.log('100 + 1');
console.log(typeof 100);
console.log(typeof '100');

//演算子
console.log(100 * 2);
console.log(100 / 2);
console.log(10 % 3);

//文字列と数値を混在
console.log('100円のりんごを10個買うと' + 100 * 10 + '円')

//真偽地
console.log(true);
console.log(false);
console.log(typeof true);

if (false) {
    console.log('条件はtrue')
}

//比較演算子
console.log(5 > 3);
console.log(5 < 3);

if (5 > 3) {
    console.log('条件はtrue');
}

//厳密な等価演算子(型も含めて値が等しいかどうか)
console.log(5 === 5); //true
console.log(5 === '5'); //false
console.log(5 !== 5); //false
console.log(5 !== '5'); //true

//等価演算子(型変換を行ってから比較)
console.log(5 == 5); //true
console.log(5 == '5'); //true
console.log(5 != 5); //false
console.log(5 != '5'); //false

//変数

//const 再宣言不可、再代入不可
//let   再宣言不可、再代入可

const fruit = 'りんご';
const prise = 100;
const quantity = 5;


console.log('りんごを5個買うと500円です');
console.log(fruit + 'を' + quantity + '個買うと' +  prise * quantity + '円です');

//スコープ(変数の参照範囲)
const rice = 'こしひかり';
{
    //ブロックスコープ
    const rice = 'あきたこまち';
    console.log(rice);
}
console.log(rice);

let sweets = 'チーズケーキ';
{
    sweets = 'ショートケーキ';
}
console.log(sweets);