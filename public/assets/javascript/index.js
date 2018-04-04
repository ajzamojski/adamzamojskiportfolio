

// mouseover effects for portfolio tab
$(document).ready(function() {
	// **************** Portfolio hover effects ********************
		$('.wrapper').mouseover(function() {
			if ($(window).width() > 752) {
			  $(this).find("img").css({
			  	"opacity" : ".3"
			  });
			  $(this).find("span").css({
			  	"visibility" : "visible"
			  });
			} 
		});
		$('.wrapper').mouseout(function() {
			if ($(window).width() > 752) {
				$(this).find("img").css({
					"transition": "all .5s ease-out",
					"opacity" : "1"
				});
				$(this).find("span").css({
					"transition": "all .1s ease-out",
					"visibility" : "hidden"
				});
			}
		});

		$('.iconpics').mouseover(function() {
			$(this).css({
				'-webkit-filter' : 'none',
	  		'filter' : 'none'
			})
		});

		$('.iconpics').mouseout(function() {
			$(this).css({
				'-webkit-filter' : 'grayscale(100%)',
	  		'filter' : 'grayscale(100%)'
			})
		});

		$("#formbutton").click(function(event){
			console.log("button has been clicked");
			// event.preventDefault();



			// $.ajax({
			// 	type: 'POST',
			// 	data: $("#email_form").serializeArray(),
			// 	url: 'send_form_email.php'
			// }).done(function(msg){
			// 	console.log(msg);
			// });

		});
});





