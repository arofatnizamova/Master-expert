$(document).ready(function () {
    $('.slick-slider').each(function () {
    let slider = $(this);
    let options = {
      prevArrow: slider.parent().find('.slider-prev'),
      nextArrow: slider.parent().find('.slider-next'),
      infinite: true,
    }
    let extraOptions = {}
    if (slider.hasClass('services')) {
      extraOptions = {
        slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          autoPlay: true,
          dots: false,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                }
            }
          
        ] 
      }
    } else if(slider.hasClass('advantages')){
      extraOptions = {
        slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          arrows: true,
          autoPlay: true,
          dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  arrows: true,
                }
            }
          
        ] 
      }
    }
    slider.slick($.extend({}, extraOptions, options ));
  })
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    grid: {
      rows: 1,
    },
    spaceBetween: 20,
    navigation: {
      nextEl: ".slider-next",
      prevEl: ".slider-prev",
    },
    loop: true,
    breakpoints: {
      990: { 
        slidesPerView: 2, 
        grid: { rows: 2 }, 
      },
    },
  });
  AOS.init();
  
})