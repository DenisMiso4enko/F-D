// Ищем нужные элементы бургер и меню
const burger = document.querySelector('.burger')
const menu = document.querySelector('.nav-menu')
// Вещаем событие на бургер и добовляем переключатель с классом active
burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    menu.classList.toggle('active')
})
// При нажатии на сылку из меню удаляем класс active
document.querySelectorAll('.nav-menu__list a').forEach(n => n.addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('active')
    burger.classList.remove('active')
    menu.classList.remove('active')
}))



var swiper = new Swiper('.popular-slider', {
    effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          allowSlideNext: true,
          allowSlidePrev: true,
          loop: true,
          slidesPerView: 4,
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 4,
            slideShadows: true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }, 
          navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
          }
  });