var S = require('string');

exports.place = {
	enabled: true,
	url: 'http://originelle.nu/pages/template/lunchmenu.php',
	header: 'Originelle',
	scrape: function($, body) {
		var allText = '';
		var arr = $('table table span').text().split('\n');
		var i;
		for(i = 0; i < arr.length; i++) {
			if(!S(arr[i]).isEmpty()) allText += arr[i] + '\n';
		}
		return allText;
	}
}