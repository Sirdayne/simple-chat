$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		console.log(th);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize(),

		}).done(function() {
            
            $('.modal').fadeOut('fast');
            $('.modal-calc').fadeOut('fast');
            $('.modal-back').fadeIn('fast');
            $('.thx').fadeIn('fast');
            
            //yaCounter39717215.reachGoal('send');
            //ga('send', 'event', 'form', 'success');
            
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});