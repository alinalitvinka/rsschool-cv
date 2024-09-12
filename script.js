const burger = document.querySelector('.burger');
const body = document.body;
const nav = document.querySelector('.vertical-menu');
const links = document.querySelectorAll('.menu_list-item');

window.onload = function() {
  console.log("Score: 150 / 160");
  console.log("- вёрстка валидная (10)");
  console.log("- вёрстка семантическая (20)");
  console.log("- для оформления СV используются css-стили (10)");
  console.log("- контент размещается в блоке, который горизонтально центрируется на странице (10)");
  console.log("- вёрстка адаптивная: ни на одном из разрешений экрана до 320px включительно не появляется горизонтальная полоса прокрутки, при этом всё содержание страницы сохраняется (10)");
  console.log("- есть адаптивное бургер-меню. Ссылки в пунктах меню ведут на основные разделы CV. При кликах по пунктам меню реализована плавная прокрутка по якорям. При уменьшении ширины экрана меню становится адаптивным. (10)");
  console.log("- на странице СV присутствует изображение, пропорции изображения не искажены, у изображения есть атрибут alt (10)");
  console.log("- контакты для связи и перечень навыков оформлены в виде списка ul > li (10)");
  console.log("- CV содержит контакты для связи, краткую информацию о себе, перечень навыков, пример кода (или пример html-разметки, или ссылку на выполненный проект), информацию об образовании и уровне английского (10)");
  console.log("- CV содержит пример вашего кода (например, решение задачи с сайта codewars) с подсветкой кода. Для подсветки кода может использоваться js-библиотека, например, highlight.js (10)");
  console.log("- CV содержит изображения-ссылки на выполненные вами проекты. При клике по изображению страница проекта открывается в новой вкладке. У каждого проекта есть название, небольшое описание, указан перечень используемых технологий. (10)");
  console.log("- CV выполнено на английском языке (10)");
  console.log("- выполнены требования к Pull Request: есть ссылка на задание, скриншот страницы СV, ссылка на деплой страницы CV на GitHub Pages, выполнена самооценка (10)");
  console.log("- есть видеорезюме автора CV на английском языке. Видеорезюме встраивается в страницу CV как видео, а не в виде кнопки или ссылки. Продолжительность видео 3-5 минут (±15 секунд). В описание видео на YouTube добавлена ссылка на его транскрипцию на английском языке (например, в документе Google Docs) (0/10)");
  console.log("- дизайн, оформление, качество выполнения CV не ниже чем в примерах CV, приведённых в материалах к заданию (10)");
}

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