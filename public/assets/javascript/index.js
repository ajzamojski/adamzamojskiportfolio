

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
			event.preventDefault();
			let formbody = {
				first_name: $("#first_name").val(),
				last_name: $("#last_name").val(),
				email: $("#email").val(),
				comments: $("#comments").val()
			};
			console.log(formbody);
			$.post("/send_form_email", formbody, function(data){

				$("#first_name").val("");
				$("#last_name").val("");
				$("#email").val("");
				$("#comments").val("");
				console.log(data.rejected.length == 0);
				if (data.rejected.length == 0) {
					$("#successPost").css({
						'display' : 'block'
					})
				}
				console.log("email has been sent");
				console.log(data);
			});

		});
});





