$(document).ready(function(){

	// Why offsite? button
	$('#description a').click(function(){
		$('#description p').slideToggle(600);
		if ($(this).hasClass('active')) {
			window.setTimeout(function(){
				$('#description a').toggleClass('active');
			}, 500);
		} else { 
			$(this).toggleClass('active');
		}
		return false;
	})
	
	// Philosophy loader script
	var placeholder = $('#philosophy li.on').height();
	var countChild = $('#philosophy ul').children('li').length;
	var currentOn = 0;
	var number = 0;
	var goOut = function(){ 
		// Fade Out
	    $('#philosophy li.on')
	    	.removeAttr('style')
	    	.animate({ left: '-35', opacity: 0 }, 400)
	    	.queue(function(nxt){ 
	    		$(this).removeClass('on').css('display','none'); 
	    		$(this).dequeue();
	    	});
		};
	var goIn = function(){
	    // Fade In
	    window.setTimeout(function(){
			$('#philosophy li:eq('+number+')')
				.removeAttr('style').animate({ left: '0', opacity: 1 }, 400)
				.addClass('on')
				.css('display','block');
			}, 400);
		};
	
	$('#philosophy ul').css({ height: placeholder });
	
	setInterval(function(){
	    console.log('ok');
	    goOut();
	    while ( number === currentOn ) { number = Math.floor(Math.random() * countChild); }
	    goIn();
	    currentOn = number;
	}, 8000);
	
	$('a.menu_btn').click(function(){
		$('#about').slideToggle();
		$('body').toggleClass('no-scroll');
		return false;
	});
	
	$('a#contact_btn').click(function(){
		$('#about').slideToggle();
		$('body').toggleClass('no-scroll');
		return false;
	});
	
	$('a.email')
		.attr("href", "mailto:saulius.kirklys@gmail.com")
		.html('saulius.kirklys@gmail.com');
	

});
