jQuery( document ).ready(function( $ ) {


$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.fixed-top').addClass('shrink');
  } else {
    $('.fixed-top').removeClass('shrink');
  }
});
    
$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar-nav.mr-auto').addClass('shrink');
  } else {
    $('.navbar-nav.mr-auto').removeClass('shrink');
  }
});   
   

});
