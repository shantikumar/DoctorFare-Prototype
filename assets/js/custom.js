
//Change pos/background/padding/add shadow on nav when scroll event happens 
$(function(){
    var navbar = $('.navbar');
    var navbarBrand = $('.navbar-brand');
    var viewportWidth = $(window).width();
    if (viewportWidth < 576) {
        alert('small screen');
        $(window).scroll(function(){
            if($(window).scrollTop() <= 10) {
                navbar.removeClass('navbar-scroll');
                navbarBrand.addClass('nav-brand-scroll');
            } else {
                navbar.addClass('navbar-scroll');
                navbarBrand.removeClass('nav-brand-scroll');
            }
        });
    }
    // if (viewportWidth < 1200) {
    //     alert('small screen');
    //     $(window).scroll(function(){
    //         if($(window).scrollTop() <= 310) {
    //             navbar.removeClass('navbar-scroll');
    //             navbarBrand.addClass('nav-brand-scroll');
    //         } else {
    //             navbar.addClass('navbar-scroll');
    //             navbarBrand.removeClass('nav-brand-scroll');
    //         }
    //     });
    // }
});


$(function(){
    var navbar = $('.navbar');
    var navbarBrand = $('.navbar-brand');
    var viewportWidth = $(window).width();
    
    if (viewportWidth < 1200) {
        alert('small screen');
        $(window).scroll(function(){
            if($(window).scrollTop() <= 310) {
                navbar.removeClass('navbar-scroll');
                navbarBrand.addClass('nav-brand-scroll');
            } else {
                navbar.addClass('navbar-scroll');
                navbarBrand.removeClass('nav-brand-scroll');
            }
        });
    }
});


$( document ).ready(function() {
    // var div = $('#show-hide1');
    // var pos = div.position();

    // var viewportWidth = $(window).width();
    // if (viewportWidth < 576) {
    //     var navbar = $('.navbar');
    //     var navbarBrand = $('.navbar-brand');

    //     $(window).scroll(function(){
    //         if($(window).scrollTop() <= 10) {
    //             navbar.removeClass('navbar-scroll');
    //             navbarBrand.addClass('nav-brand-scroll');
    //         } else {
    //             navbar.addClass('navbar-scroll');
    //             navbarBrand.removeClass('nav-brand-scroll');
    //         }
    //     });
    // }


    $('.switch label').on('click', function(){
      var indicator = $(this).parent('.switch').find('span');
      if ( $(this).hasClass('right') ){
            $(indicator).addClass('right');
      } else {
        $(indicator).removeClass('right');
      }
    });
    
    $('#navbarModal').modal('handleUpdate');
});