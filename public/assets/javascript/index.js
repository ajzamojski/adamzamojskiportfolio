

// mouseover effects for portfolio tab
$(document).ready(function() {
	// if ($(window).width() > 767) {
	// **************** Portfolio hover effects ********************
		$('.wrapper').mouseover(function() {
			if ($(window).width() > 752) {
					console.log(this);
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
	
	// else {
	// 	console.log("window width is small");
	// }
});





