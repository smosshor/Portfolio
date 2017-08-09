jQuery( document ).ready(function( $ ) {


$(window).scroll(function() {
  if ($(document).scrollTop() > 100) {
    $('.navbar-fixed-top').addClass('shrink');
  } else {
    $('.navbar-fixed-top').removeClass('shrink');
  }
});

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
        return this;
    }
});

AOS.init({
  duration: 1200,
})
$('.col-md-4').AOS('fade-up');
$('.col-md-8').AOS('fade-up');
$('.col-md-12').AOS('fade-up');
    
    });
