$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('nav .nav-wrapper').addClass('shrink');
  } else {
    $('nav .nav-wrapper').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('nav .brand-logo').addClass('shrink');
  } else {
    $('nav .brand-logo').removeClass('shrink');
  }
});

$(window).scroll(function() {
  if ($(document).scrollTop() > 200) {
    $('nav ul a').addClass('shrink');
  } else {
    $('nav ul a').removeClass('shrink');
  }
});



$( document ).ready(function() {
    
$("#buttonDropDown").click(function(){
    $("#section1").toggle();
});
});


