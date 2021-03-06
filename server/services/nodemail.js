(function() {
	'use strict';
	
	function contactUsMessengerHandler(nodemailer, config) {
		var services = {
			contactUsMessengerHandler: contactUsMessengerHandler
		};

		function contactUsMessengerHandler(mailData) {
			var transporter = nodemailer.createTransport(config);
			transporter.sendMail(mailData, function(err, info) {
				if(err)
					return next(err);
			});
		}

		return services;
	}
	module.exports = contactUsMessengerHandler;
}());