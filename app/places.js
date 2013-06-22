var request = require('request');
var cheerio = require('cheerio');
var S = require('string');
var each = require('./utils').each;

exports.handlePlace = function(place, body) {
	$ = cheerio.load(body);

	console.log(place.header);
	console.log(S('-').repeat(place.header.length).s);
	console.log(place.scrape.call(body, $, body));
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
	each(placesArr, function(place) {
		if (place.enabled) {
			exports.handlePlace(place, body);
		}
	});
};

exports.requestPlaces = function(placesArr) {
	each(placesArr, function(place) {
		if (place.enabled) {
			exports.requestPlace(place);
		}
	});
};