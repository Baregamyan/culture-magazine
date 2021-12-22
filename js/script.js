"use strict";

/**
 * Находим переключатели меню сайта
 */
function setupMenusToggling() {
  var menu = 'menu';
  var menus = document.querySelectorAll(".".concat(menu));
  var menusOpen = document.querySelector('.nav__open');
  var menusClose = document.querySelector('.nav__close');
  /**
   * Скрытие всех меню в мобильной версии, если js не подгрузился
   */

  menusClose.classList.add('nav__close--hide');
  menusOpen.classList.add('nav__open--show');
  menus.forEach(function (menu) {
    menu.classList.remove('menu--no-js');
  });
  menusOpen.addEventListener('click', function () {
    menusOpen.classList.remove('nav__open--show');
    menus.forEach(function (menu) {
      menu.classList.add('menu--show');
      menu.firstElementChild.firstElementChild.focus();
    });
    menusClose.classList.remove('nav__close--hide');
  });
  menusClose.addEventListener('click', function () {
    menusClose.classList.add('nav__close--hide');
    menus.forEach(function (menu) {
      menu.classList.remove('menu--show');
      menusOpen.focus();
    });
    menusOpen.classList.add('nav__open--show');
  });
}

;
setupMenusToggling();
/**
 * Инициализация слайдера в шапке
 */

var slider = new Swiper('.recently', {
  loop: true,
  spaceBetween: 150,
  pagination: {
    el: '.recently__pagination',
    bulletElement: 'button',
    clickable: true
  },
  navigation: {
    nextEl: '.recently__control--next',
    prevEl: '.recently__control--prev'
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти на слайд номер {{index}}'
  }
});
/**
 * Инициализация слайдера в блоке с видео
 */

var sliderVideo = new Swiper('.videos', {
  loop: true,
  spaceBetween: 150,
  pagination: {
    el: '.videos__pagination',
    type: 'bullets',
    clickable: true
  },
  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
    paginationBulletMessage: 'Перейти на слайд номер {{index}}'
  }
});