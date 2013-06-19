var utils = require('../app/utils');

exports.place = {
	enabled: true,
	url: 'http://www.phuunthai.com/',
	header: 'Phuun Thai',
	scrape: function($) {
		var allText = '';
		$('#first_info').each(function (){
			var text = this.text();
			allText += text;
		});
		return utils.removeEmptyLines(allText);
	}
};