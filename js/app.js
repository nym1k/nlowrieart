$(function(){
  (function(){
    var App = {
      Init: function() {
        App.Loading(App.UI());
      },
      UI: function(){
        // instagrab
        var token = '52931610.272b9cb.cb4f5faaff6e4a57bd9a87e2eb9ea11e',
            maxPhotos = 12;

        $.ajax({
          url: 'https://api.instagram.com/v1/users/self/media/recent?count=' + maxPhotos + '&access_token=' + token,
          dataType: 'jsonp',
        	type: 'GET',
        	success: function(data){
        		for( x in data.data ){
              var caption = data.data[x].caption.text.substring(0, 97) + '...';
        			$('.feed').append('<a href="'+data.data[x].link+'" alt="instagram photo" class="photobox"><div class="photo" style="background: url('+data.data[x].images.low_resolution.url+'); background-position: center; background-size: cover;"></div><p class="caption">' + caption + '</p></div>');
        		}
            window.sr = ScrollReveal({reset: true});
            sr.reveal('.photobox', { duration: 800 });
        	},
        	error: function(data){
        		console.log(data);
        	}
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
        $('body').scrollspy({ target: '.navbar' });

        // Smooth Scroll
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

      },
      Loading: function() {
        // Loading Screen
        $(window).on('load', function() {
          $(".se-pre-con").fadeOut("slow");;
        });
      }
    };

    App.Init();

  })();
});
