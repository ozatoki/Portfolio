//フードメニュー 
const foodopen = document.getElementById("food-open");
const foodclose = document.getElementById("food-close");
const othermenu = document.getElementById("othermenu");
const foodcontent = document.querySelector('.foodcontent');
const text = document.getElementById('text');
const figure= document.getElementById('figure');
foodopen.addEventListener('click', () => {
    othermenu.classList.toggle('active')
    foodcontent.classList.toggle('active')
    text.textContent = '戻る'
    figure.textContent = '▲'
    console.gelog('clicked')
});
