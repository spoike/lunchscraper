var places = require('./app/places'), placeArr = [], providerArr = [], module, i;

require('fs').readdirSync('./places').forEach(function(file) {
	var filePath = './places/' + file;
	console.log('Loading ' + filePath);
	module = require(filePath);
	if (!module) return;
	if (module.place) placeArr.push(module.place);
	if (module.provider) providerArr.push(module.provider);
});

places.requestPlaces(placeArr);

for(i = 0; i < providerArr.length; i++) {
	var provider = providerArr[i];
	if (provider.enabled) {
		provider.load();
	}
}