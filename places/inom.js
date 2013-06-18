exports.place = {
	enabled: true,
	url: 'http://www.inom-matbar.se/lunch.php',
	header: 'Inom - Mat & Bar',
	scrape: function($) {
		var allText = '';
		$('#column1').each(function (){
			var text = this.text();
			allText += text;
		});
		return allText;
	}
};