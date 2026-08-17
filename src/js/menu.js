const burger = document.querySelector('.burger-btn');
const menu = document.getElementById('mobile');
const closeBtn = document.querySelector('.close-btn');
const menuLinks = menu.querySelectorAll('.mobile-list-nav-link');

menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('is-open');
  });
});

burger.addEventListener('click', () => {
  menu.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('is-open');
});
