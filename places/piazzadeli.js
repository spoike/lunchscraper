var utils = require('../app/utils');

exports.place = {
	enabled: true,
	url: 'http://www.piazzadeli.se/lunch',
	header: 'Piazza Ristorante',
	scrape: function($) {
		var allText = '';
		$('.contentpaneopen').each(function (){
			var text = this.text();
			allText += text;
		});
		return utils.removeEmptyLines(allText);
	}
};