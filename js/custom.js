jQuery( document ).ready(function( $ ) {


$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar-fixed-top').addClass('shrink');
  } else {
    $('.navbar-fixed-top').removeClass('shrink');
  }
});


    });
