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

$('.col-md-4').animateCss('fadeInRight');
//$('.col-md-12').animateCss('fadeInLeft');
$('.container-fluid').animateCss('bounceIn');


$('#portfolio-item-title').animateCss('bounceIn');
$('#portfolio-item-title').addClass("wow");

$('#portfolio-item-section').animateCss('bounceIn');
$('#portfolio-item-section').addClass("wow");

