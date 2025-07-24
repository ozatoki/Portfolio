//フードメニュー 
const foodopen = document.getElementById("food-open");
const foodclose = document.getElementById("food-close");
const otherfood = document.getElementById("otherfood");
const foodcontent = document.querySelector('.foodcontent');
const foodtext = document.getElementById('foodtext');
const foodfigure= document.getElementById('foodfigure');
foodopen.addEventListener('click', () => {
    otherfood.classList.toggle('active')
    foodcontent.classList.toggle('active')
    if (foodtext.textContent === '他に見る') {
        foodtext.textContent = '戻る';
        foodfigure.textContent = '▲';
    } else {
        foodtext.textContent = '他に見る';
        foodfigure.textContent = '▼';
    }
});

// ドリンクメニュー
const drinkopen = document.getElementById("drink-open");
const drinkclose = document.getElementById("drink-close");
const otherdrink = document.getElementById("otherdrink");
const drinkcontent = document.querySelector('.drinkcontent');
const drinktext = document.getElementById('drinktext');
const drinkfigure= document.getElementById('drinkfigure');
drinkopen.addEventListener('click', () => {
    otherdrink.classList.toggle('active')
    drinkcontent.classList.toggle('active')
    if (drinktext.textContent === '他に見る') {
        drinktext.textContent = '戻る';
        drinkfigure.textContent = '▲';
    } else {
        drinktext.textContent = '他に見る';
        drinkfigure.textContent = '▼';
    }
});

// デザートメニュー
const desertopen = document.getElementById("desert-open");
const desertlose = document.getElementById("desert-close");
const otherdesert = document.getElementById("otherdesert");
const desertcontent = document.querySelector('.desertcontent');
const deserttext = document.getElementById('deserttext');
const desertfigure= document.getElementById('desertfigure');
desertopen.addEventListener('click', () => {
    otherdesert.classList.toggle('active')
    desertcontent.classList.toggle('active')
    if (deserttext.textContent === '他に見る') {
        deserttext.textContent = '戻る';
        desertfigure.textContent = '▲';
    } else {
        deserttext.textContent = '他に見る';
        desertfigure.textContent = '▼';
    }
});