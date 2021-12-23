$(function () {

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'horizontal',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    loop: true,
    slidesPerView: 4,
    spaceBetween: 30,
    speed: 2500,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        // spaceBetween: 10,
      },
      360: {
        slidesPerView: 1,
        // spaceBetween: 10,
      },
      575: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      992: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
      1200: {
        slidesPerView: 4,
        // spaceBetween: 40,
      }
    },
    // speed: 400,
    //  spaceBetween: 100,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
  });

});
