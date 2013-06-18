var S = require('string');

exports.place = {
	enabled: true,
	url: 'http://www.kgrand.se',
	header: 'Kgränd',
	scrape: function($) {
		var allText = '';
		$('#item1').find('h4, h1').each(function (){
			var text = this.text();
			text = S(text).replaceAll(/([A-Z][\wåäö]{5,6}\s[0-9]{2}\/[0-9])/g, '\n');
			allText += text;
		});
		return allText;
	}
};