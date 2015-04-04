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

$('#ContactForm')
  .on('valid', function () {

  	var name = $("input#name").val();
  	var email = $("input#email").val();
  	var message = $("textarea#message").val();

    var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
	  //alert (dataString);return false;
	  $.ajax({
	    type: "POST",
	    url: "/New/process.php",
	    data: dataString,
	    success: function() {
	      $('#ContactForm').html("<div id='message'></div>");
	      $('#message').html("<h2>Thank you!</h2>")
	      .append("<p>I will answer your message in 2 business days.</p>")
	      .hide()
	      .fadeIn(500, function() {
	        // $('#message').append("<img id='checkmark' src='images/check.png' />");
	      });
	    }
	  });
	  return false;
  });