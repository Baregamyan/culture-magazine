/**
 * Находим переключатели меню сайта
 */
function setupMenusToggling() {
  const menu = "menu";
  let menus = document.querySelectorAll(`.${menu}`);
  let menusOpen = document.querySelector('.nav__open');
  let menusClose = document.querySelector('.nav__close');

  /**
   * Скрытие всех меню в мобильной версии, если js не подгрузился
   */
  menusClose.classList.add('nav__close--hide');
  menusOpen.classList.add('nav__open--show');
  menus.forEach(menu => {
    menu.classList.remove("menu--no-js");
  });

  menusOpen.addEventListener('click', () => {
    menusOpen.classList.remove('nav__open--show');
    menus.forEach(menu => {
      menu.classList.add(`menu--show`);
    });
    menusClose.classList.remove('nav__close--hide');
  })

  menusClose.addEventListener('click', ()=> {
    menusClose.classList.add('nav__close--hide');
    menus.forEach(menu => {
      menu.classList.remove(`menu--show`);
    });
    menusOpen.classList.add('nav__open--show');
  })
};

setupMenusToggling();
