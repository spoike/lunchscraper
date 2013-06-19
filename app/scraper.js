var places = require('./places'), fs = require('fs'), placeArr = [], providerArr = [], i;

var loadFile = function(file) {
	var module, filePath = '../places/' + file;
	console.log('Loading ' + filePath);
	module = require(filePath);
	if (!module) return;
	if (module.place) placeArr.push(module.place);
	if (module.provider) providerArr.push(module.provider);	
};

var scrapeLunches = function() {
	places.requestPlaces(placeArr);

	for(i = 0; i < providerArr.length; i++) {
		var provider = providerArr[i];
		if (provider.enabled) {
			provider.load();
		}
	}
};

exports.scrapeAll = function() {
	fs.readdirSync('./places').forEach(function(file) {
		loadFile(file);
	});

	scrapeLunches();
};

exports.scrape = function(file) {
	if (file) {
		loadFile(file);
		scrapeLunches();
	} else {
		exports.scrapeAll();
	}
}