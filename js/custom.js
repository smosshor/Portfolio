jQuery( document ).ready(function( $ ) {

//paste this code under the head tag or in a separate js file.
// Wait for window load
$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");;
});
    
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
    

});
