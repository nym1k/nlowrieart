$(function() {
  var token = '52931610.272b9cb.cb4f5faaff6e4a57bd9a87e2eb9ea11e',
      maxPhotos = 12;

  $.ajax({
    url: 'https://api.instagram.com/v1/users/self/media/recent?count=' + maxPhotos + '&access_token=' + token,
    dataType: 'jsonp',
  	type: 'GET',
  	success: function(data){
   		console.log(data);
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
});
