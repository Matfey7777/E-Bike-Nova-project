const burger = document.querySelector('.burger-btn');
const menu = document.getElementById('mobile');
const closeBtn = document.querySelector('.close-btn');

burger.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
