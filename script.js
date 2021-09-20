const burger = document.querySelector('.burger');
const body = document.body;
const nav = document.querySelector('.vertical-menu');
const links = document.querySelectorAll('.menu_list-item');


burger.addEventListener('click', showBurgerMenu);

[...links].forEach((link) => {
    link.addEventListener('click', hideBurgerMenu);
  })

function showBurgerMenu() {
  burger.removeEventListener('click', showBurgerMenu);
  burger.classList.toggle('active');
  body.classList.toggle('lock');
  nav.classList.toggle('active');

  setTimeout(() => {
    burger.addEventListener('click', showBurgerMenu);
  }, 500);
}

function hideBurgerMenu() {
  burger.classList.remove('active');
  body.classList.remove('lock');
  nav.classList.remove('active');
}