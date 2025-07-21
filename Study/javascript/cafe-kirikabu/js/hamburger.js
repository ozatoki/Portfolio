const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
hamburger.addEventListener('click', () => {
    nav.classList.toggle('active')
});

shopinfo.addEventListener('click', () => {
    const target = document.getElementById('infomation');
    const headerHeight = document.querySelector('header').offsetHeight;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    nav.classList.remove('active');
});


foodmenu.addEventListener('click', () => {
    const target = document.getElementById('food');
    const headerHeight = document.querySelector('header').offsetHeight;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    nav.classList.remove('active');
});

drinkmenu.addEventListener('click', () => {
    const target = document.getElementById('drink');
    const headerHeight = document.querySelector('header').offsetHeight;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    nav.classList.remove('active');
});

desertmenu.addEventListener('click', () => {
    const target = document.getElementById('desert');
    const headerHeight = document.querySelector('header').offsetHeight;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    nav.classList.remove('active');
});

shopannounce.addEventListener('click', () => {
    const target = document.getElementById('announce');
    const headerHeight = document.querySelector('header').offsetHeight;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    nav.classList.remove('active');
});

shopQandA.addEventListener('click', () => {
    const target = document.getElementById('QandA');
    const headerHeight = document.querySelector('header').offsetHeight;

    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });

    nav.classList.remove('active');
});

