//条件分岐

const yourScore = 92;
let yourClass;
if (yourScore >= 90){
    yourClass = '特進クラス';
}else{
    yourClass = '普通クラス';
}
console.log('あなたは' + yourClass + 'です');


//関数
function message(){
    console.log('hello');
}
message();

function calculation(){
    const price = 100;
    const quantity = 10;
    const total = price * quantity;
    console.log('合計金額は' + total + '円です');
}
calculation();

//関数(引数)
function calculation2(price, quantity){
    const total = price * quantity;
    console.log('合計金額は' + total + '円です');
}
calculation2(100, 10);
calculation2(200, 10);


function classification(yourScore){
    let yourClass;
    if (yourScore >= 90){
        yourClass = '特進クラス';
    }else{
        yourClass = '普通クラス';
    }
    console.log('あなたは' + yourClass + 'です');
}
classification(90);
classification(30);

//繰り返し処理 for
for(let i =1; i <= 5; i++){
    console.log(i)
}

//繰り返し処理 while
let j = 1;
while (j <= 5){
    console.log(j);
    j++;
}

//配列
const fruits = ['りんご', 'みかん', 'ぶどう'];
const number = [100, 90, 80];
              // 0    1   2
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);

//配列を順番に取り出す
for(let i =0; i < fruits.length; i++){
console.log(i + 1 + 'つ目:' + fruits[i]);
}

fruits.forEach(function (element,index) {
    console.log(index + 1 + 'つ目:' + element);
});


//オブジェクト

const obj = {};
console.log(obj);
console.log(typeof obj);

const desk = {
    name: 'デスクA',
    width: 1000,
    height: 720,
    depth:  650,
};
console.log(desk);
console.log(desk.name);
console.log(desk.width);

const boxWidth = document.querySelector('.box').offsetWidth;
const boxHeight = document.querySelector('.box').offsetHeight;
console.log(boxWidth);
console.log(boxHeight);


//メソッド

const desk2 = {
    name: 'デスクA',
    width: 1000,
    height: 720,
    depth:  650,
    displayArea:function(){
        console.log('天板の面積は' + this.width *  this.depth + '平方ミリメートルです');
    },
};
desk2.displayArea();

const w = window.innerWidth;
const h = window.innerHeight;
console.log(w);
console.log(h);


//イベント
document.querySelector('button').addEventListener('click',function(){
    document.querySelector('h1').textContent = 'Hello';
});

//上に戻るボタンの実装

window.addEventListener('scroll',function(){
    const scroll = window.scrollY;
    if(scroll > 300){
        document.getElementById('go_top').classList.add('visible');
    }else{
        document.getElementById('go_top').classList.remove('visible');
    }
});