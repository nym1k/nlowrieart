$(function() {

  // Loading Screen
  $(window).on('load', function() {
    $(".se-pre-con").fadeOut("slow");;
  });

  // Full Screen Hero
  checkSize();
  $(window).resize(checkSize);
  function checkSize() {
    var height = $('#hero').height();
    $('.fullscreen').css('height', height);
  }

  // Apply Header Style After Hero
  $(window).scroll(function() {
  var scroll = $(window).scrollTop();
  var height = $('#hero').height();
  var width = $(window).width();

  if (scroll >= height && width > 990) {
    $(".navbar").addClass("darkHeader");
    $(".navbar-brand").css('display', 'inline-block');
  } else {
    $(".navbar").removeClass("darkHeader");
    $(".navbar-brand").css('display', 'none');
  }
  });

  // Scrollspy
  $('body').scrollspy({ target: '.navbar' })

  // Smooth Scroll
  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  // Collapse Mobile Menu on button click
  $('.navbar-collapse a').click(function (e) {
    if (window.innerWidth < 992) {
      $('.navbar-collapse').collapse('toggle');
    }
  });

  // Click outside of menu to close
  $('html').click(function() {
    var menu = $('.navbar-collapse')
    if (menu.hasClass( "show")) {
      menu.collapse('toggle');
    }
  });

});
