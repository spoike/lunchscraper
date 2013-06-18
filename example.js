var places = require('./app/places'), placeArr = [], module;

require('fs').readdirSync('./places').forEach(function(file) {
	var filePath = './places/' + file;
	console.log('Loading ' + filePath);
	module = require(filePath).place;
	if (module) placeArr.push(module);
});

places.requestPlaces(placeArr);