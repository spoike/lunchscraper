var request = require('request');
var cheerio = require('cheerio');
var S = require('string');

exports.handlePlace = function(place, body) {
	$ = cheerio.load(body);

	console.log(place.header);
	console.log(S('-').repeat(place.header.length).s);
	console.log(place.scrape.call(body, $));
};

exports.requestPlace = function(place) {
	request(place.url, function(err, resp, body) {
		if (err) {
			console.error(err);
		}
		exports.handlePlace(place, body);
	});	
};

exports.handlePlaces = function(placesArr, body) {
	var i, place;
	for (i = 0; i < placesArr.length; i++) {
		place = placesArr[i];
		if (place.enabled) {
			exports.handlePlace(place, body);
		}
	}	
};

exports.requestPlaces = function(placesArr) {
	var i, place;
	for (i = 0; i < placesArr.length; i++) {
		place = placesArr[i];
		if (place.enabled) {
			exports.requestPlace(place);
		}
	}	
};