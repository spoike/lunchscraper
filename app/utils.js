var S = require('string');

exports.removeEmptyLines = function(str) {
	var i, arr = str.split('\n'), allText = '';
	for(i = 0; i < arr.length; i++) {
		if(!S(arr[i]).isEmpty()) allText += S(arr[i]).trim() + '\n';
	}
	return allText;
};