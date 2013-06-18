var utils = require('../app/utils');

exports.place = {
	enabled: true,
	url: 'http://originelle.nu/pages/template/lunchmenu.php',
	header: 'Originelle',
	scrape: function($, body) {
		return utils.removeEmptyLines($('table table span').text());
	}
}