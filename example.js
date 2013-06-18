var places = require('./places');
var S = require('string');

var i, place, lunchArr = [
	{
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
	},
	{
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
	},
	{
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
];

places.requestPlaces(lunchArr);