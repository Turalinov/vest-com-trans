(function() {
  'use strict';

  // брекпоинт для уничтжения swiper
  const breakpoint = window.matchMedia('(max-width:1200px)');

  console.log(breakpoint);

  // отслеживаем экземпляр swiper для последующего уничтожения
  let cargoSwiper;


  //функция проверки
  const breakpointChecker = function() {

    if( breakpoint.matches === true ) {
      //если меньше чем 1200 запускаем версию swiper с маленьким окном просмотра

      return enableSwiper();


    } else {
      //больше 1200, значит отключаем слайдер

      // очищаем старые экземпляры и встроенные стили, когда они доступны

      if ( cargoSwiper !== undefined ) cargoSwiper.destroy(true, true);
      // или / и ничего не делать
      return;



    }

  }

  const enableSwiper = function() {
    cargoSwiper = new Swiper('.cargo-slider', {
      //Стрелки
    navigation: {
      nextEl: '.swiper-button-next', //тут можем задать свои - в одних из блоков будут
      prevEl: '.swiper-button-prev',
    },


  // Буллеты, текущее положение, прогрессбар
    pagination: {
      el: '.swiper-pagination',
    // 1 тип: буллеты
    type: 'bullets', //по умолчанию
    clickable: true,
    // динамические буллеты
    dynamicBullets: false,
    //кастомные буллеты
    // renderBullet: function(index, className) {
    //   return '<span class="' + className + '">' + (index + 1) + '</span>';
    // }
    },

      loop: true,
      slidesPerView: 1.5,
      grabCursor: true,

        //брекпоинты (adaptive MOBILE FIRST)
        //ширина экрана
        breakpoints: {
          320: {//от 320
            slidesPerView: 1,
            //оступ между слайдами
            spaceBetween: 25,
          },
          768: {//от 480
            slidesPerView: 1.5,
            //оступ между слайдами
            spaceBetween: 0,
          },  
        },
    })
  }


  // следим за изменениями размера области просмотра
  breakpoint.addListener(breakpointChecker);

  //старт
  breakpointChecker();

})();
