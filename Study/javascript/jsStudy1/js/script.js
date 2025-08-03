const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('active');
});

const menufood = document .getElementById('menufood');
const food = document .getElementById('food');
menufood .addEventListener('click', () => {
    food.scrollIntoView({ behavior: 'smooth', block: 'start' })
});

console.log(document.getElementById('menufood'));
