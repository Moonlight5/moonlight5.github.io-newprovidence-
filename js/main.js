$(document).ready(function(){
  

  // slider
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    prevArrow: '<span class="slick-arrow slick-prev"><i class="fas fa-chevron-left"></i></span>',
    nextArrow: '<span class="slick-arrow slick-next"><i class="fas fa-chevron-right"></i></span>'
  });

  // Plan btn 
  $('.plan-btn').on('click', function(){
    $(this).addClass('plan-btn_on').siblings().removeClass('plan-btn_on');
  });

  // Plan blocks
  $('.plan-block').on('click', function(){
    $(this).addClass('plan-block_on').siblings().removeClass('plan-block_on');
  });
});




