var request = require('request');
var S = require('string');

var handleRestaurant = function(r) {
	console.log(r.name);
	console.log(S('-').repeat(r.name.length).s);
	var i, dish;
	if (r.dishes.day && r.dishes.day.length > 0) {
		console.log('Dagens:')
		for (i = 0; i < r.dishes.day.length; i++) {
			dish = r.dishes.day[i];
			console.log(dish.name + " " + dish.description);
		}
	}
	if (r.dishes.week && r.dishes.week.length > 0) {
		console.log('Veckans:')
		for (i = 0; i < r.dishes.week.length; i++) {
			dish = r.dishes.week[i];
			console.log(dish.name + " " + dish.description);
		}
	}
	console.log();
};

exports.provider = {
	enabled: true,
	load: function() {
		var date = new Date(), 
			dateStr = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
		request.post(
			'http://hd.se/lunchguiden/menu.do', {
				'form': {
					'actionCommand': 'GET_MENU',
					'sortOrder': 'id',
					'startDate': '2013-06-19'
				}
			}, function(e, r, body) {
				var response = JSON.parse(body);
				var dateRes = response.data.dates[0];
				var restaurants = dateRes.restaurants;
				var i;
				for (i = 0; i < restaurants.length; i++) {
					var restaurant = restaurants[i];
					handleRestaurant(restaurant);
				}
			});
	}
}