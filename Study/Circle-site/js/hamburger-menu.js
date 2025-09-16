const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');
  const closeBtn = document.getElementById('closeBtn');
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open'); // メニューの開閉
  });

  closeBtn.addEventListener('click', () => {
  navMenu.classList.remove('open');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open'); // メニュー閉じる
  });
});