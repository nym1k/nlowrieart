  // instaToken: '2228429724.f0e7230.aa07da7f5fc64208b2e9b2bd0b574f1a',
  // instaID: 'f0e7230915354183a473ef2636f02109',
$(function() {
  var token = '52931610.272b9cb.cb4f5faaff6e4a57bd9a87e2eb9ea11e',
      maxPhotos = 12;

  $.ajax({
  	//url: 'https://api.instagram.com/v1/users/search?q=' + userid + '&count=' + maxPhotos + '&access_token=' + token,
    //url: 'https://api.instagram.com/v1/users/' + userid + '/media/recent', // or /users/self/media/recent for Sandbox
    url: 'https://api.instagram.com/v1/users/self/media/recent?count=' + maxPhotos + '&access_token=' + token,
    dataType: 'jsonp',
  	type: 'GET',
  	success: function(data){
   		console.log(data);
  		for( x in data.data ){
        var caption = data.data[x].caption.text.substring(0, 97) + '...';
  			$('.feed').append('<a href="'+data.data[x].link+'" alt="instagram photo" class="photobox"><div class="photo" style="background: url('+data.data[x].images.low_resolution.url+'); background-position: center; background-size: cover;"></div><p class="caption">' + caption + '</p></div>');
        // data.data[x].images.low_resolution.url - URL of image, 306х306
  			// data.data[x].images.thumbnail.url - URL of image 150х150
  			// data.data[x].images.standard_resolution.url - URL of image 612х612
  			// data.data[x].link - Instagram post URL
  		}
      window.sr = ScrollReveal({reset: true});
      sr.reveal('.photobox', { duration: 800 });
  	},
  	error: function(data){
  		console.log(data); // send the error notifications to console
  	}
  });
});
