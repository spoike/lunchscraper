var request = require('request');
var cheerio = require('cheerio');
var S = require('string');

var i, place, lunchArr = [
	{
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
	},
	{
		url: 'http://www.inom-matbar.se/lunch.php',
		header: 'Inom - Mat & Bar',
		scrape: function($) {
			var allText = '';
			$('#column1').each(function (){
				var text = this.text();
				text = S(text).replaceAll(/([A-Z][\wåäö]{5,6}\s[0-9]{2}\/[0-9])/g, '\n');
				allText += text;
			});
			return allText;
		}
	}
], requestPlace = function(place) {
	request(place.url, function(err, resp, body) {
		if (err) {
			console.error(err);
		}
		$ = cheerio.load(body);

		console.log(place.header);
		console.log(S('-').repeat(place.header.length).s);
		console.log(place.scrape($));
	});	
};

for (i = 0; i < lunchArr.length; i++) {
	requestPlace(lunchArr[i]);
}