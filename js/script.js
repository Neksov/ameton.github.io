window.addEventListener('DOMContentLoaded' , function(){
  'use strict';
  //Слайдер № 1
  let questionSwiper= new Swiper('.question-swiper', {
    slidesPerView: 4,
    spaceBetween: 24,
    slidesPerGroup: 1,  
    autoHeight: true, 
    loop: false,
    pagination: {
      el: ".swiper-pagination-question",
      type: "bullets",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next-question',
      prevEl: '.swiper-button-prev-question',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });

  //questionsSlider
  function referenceSlider(){
    const width = window.innerWidth
    if (width < 1200){
      let referenceSwiper= new Swiper('.reference-swiper', {
        slidesPerView: 1,
        spaceBetween: 60,
        slidesPerGroup: 1,
        autoHeight: true, 
        pagination: {
          el: ".swiper-pagination-reference",
          clickable: true,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          767: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 1,
          },
        },
        });
    }
  };
  referenceSlider();
});




