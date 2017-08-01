$(window).scroll(function() {
  if ($(document).scrollTop() > 150) {
    $('nav .nav-wrapper').addClass('shrink');
  } else {
    $('nav .nav-wrapper').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 150) {
    $('nav .brand-logo').addClass('shrink');
  } else {
    $('nav .brand-logo').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 150) {
    $('nav ul a').addClass('shrink');
  } else {
    $('nav ul a').removeClass('shrink');
  }
});

