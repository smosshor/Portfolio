jQuery( document ).ready(function( $ ) {


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('.fixed-top').addClass('shrink');
  } else {
    $('.fixed-top').removeClass('shrink');
  }
});
    
$(window).scroll(function() {
  if ($(document).scrollTop() >50) {
    $('.navbar-nav.mr-auto').addClass('shrink');
  } else {
    $('.navbar-nav.mr-auto').removeClass('shrink');
  }
});   
<<<<<<< HEAD
=======
   
>>>>>>> parent of 2a0f48d... e

});
