

$(function checkSize(){
    var navbar = $('.navbar');
    var navbarBrand = $('.navbar-brand');
    
    $(window).scroll(function(){
        if($(window).scrollTop() <= 310) {
            navbar.removeClass('navbar-scroll');
            navbarBrand.addClass('nav-brand-scroll');
        } else {
            navbar.addClass('navbar-scroll');
            navbarBrand.removeClass('nav-brand-scroll');
        }
    });
});


$( document ).ready(function() {
    $('.switch label').on('click', function(){
      var indicator = $(this).parent('.switch').find('span');
      if ( $(this).hasClass('right') ){
            $(indicator).addClass('right');
      } else {
        $(indicator).removeClass('right');
      }
    });
    $('.alert').alert();
});