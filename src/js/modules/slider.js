/**
 * Инициализация слайдера в шапке
 */
let slider = new Swiper('.recently', {
  loop: true,
  spaceBetween: 150,
  pagination: {
    el: '.recently__pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.recently__control--next',
    prevEl: '.recently__control--prev',
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
  }
})
