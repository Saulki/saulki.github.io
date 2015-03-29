$(document).foundation();

var mq = window.matchMedia( "only screen and (min-width:40.063em)" );
if (mq.matches) {
	$(window).scroll(function() {
	    if ($(document).scrollTop() > 100) {
	        $(".contain-to-grid").addClass('smaller');
	    }
	    else {
	        $(".contain-to-grid").removeClass('smaller');
	    }
	});
};