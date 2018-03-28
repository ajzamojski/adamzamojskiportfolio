
// $(window).resize(function () {
//     var viewportWidth = $(window).width();
    // if (viewportWidth > 892) {
    //       $("#navbarNav").addClass("col-5");
    // }
    // if (viewportWidth < 892) {
    //      	$("#navbarNav").removeClass("col-5 collapse");
    // }
//     if (true) {}
// });

// $("#buttondropnav").click(function () {
// 	let buttonOpen = false;
// 	// if ( $("#buttondropnav").css('display') == 'none') {
// 		if (!buttonOpen) {
// 			$("#navbarNav").removeClass("col-5", function(){
// 					buttonOpen = true;
// 					return;
// 				});
// 		}
// 		if (buttonOpen) {
// 			$("#navbarNav").addClass("col-5", function(){
// 				buttonOpen = false;
// 				return;
// 				});
// 		}
// 	// }
// });

// mouseover effects for portfolio tab
$(document).ready(function() {
	// **************** Portfolio hover effects ********************
	$('.wrapper').mouseover(function() {
			// console.log("mousein");
		  $(this).find("img").css({
		  	"opacity" : ".3"
		  });
		  $(this).find("span").css({
		  	"visibility" : "visible"
		  });
		});
	$('.wrapper').mouseout(function() {
		// console.log("this is a mouseout");
		$(this).find("img").css({
			"transition": "all .5s ease-out",
			"opacity" : "1"
		});
		$(this).find("span").css({
			"transition": "all .1s ease-out",
			"visibility" : "hidden"
		});
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

});





