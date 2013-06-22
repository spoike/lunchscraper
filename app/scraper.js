var places = require('./places'), 
	fs = require('fs'), 
	placeArr = [], 
	providerArr = [],
	each = require('./utils').each;

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

	each(providerArr, function(provider) {
		if (provider.enabled) {
			provider.load();
		}
	});
};

var scrapeAll = function() {
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
		scrapeAll();
	}
};