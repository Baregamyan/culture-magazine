/**
 * Инициализация слайдера в шапке
 */
let slider = new Swiper('.recently', {
  loop: true,
  spaceBetween: 150,
  pagination: {
    el: '.recently__pagination',
    bulletElement: 'button',
    clickable: true
  },
  navigation: {
    nextEl: '.recently__control--next',
    prevEl: '.recently__control--prev',
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
let sliderVideo = new Swiper('.videos', {
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
})
