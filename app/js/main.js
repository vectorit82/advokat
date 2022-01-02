$(function () {

  window.onscroll = function showHeader () {

    var header = document.querySelector ('.menu__top');

    if(window.pageYOffset > 20) {
        header.classList.add('header__scroll');
    }

    else {
        header.classList.remove('header__scroll');
    }
  }

  $('.menu__burger-btn, .burger__link').on('click', function () {
    $('.burger__list, .menu__burger-line').toggleClass('burger--active');
    $('body').toggleClass('look');
  });

  $(".menu__link, .logo, .header__bottom-btn, .science__btn-link, .burger__link").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 2000);
	});

  const swiper = new Swiper('.swiper', {
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
      },
      360: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      }
    },
  });


  var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animate__animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null,    // optional scroll container selector, otherwise use window,
      resetAnimation: true,     // reset animation on end (default is true)
    }
  );
  wow.init();


  $('.science__btn').on('click', function () {
    $('.close').toggleClass('open--active');
  });

});
