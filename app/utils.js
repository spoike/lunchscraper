var S = require('string');

var each = function(arr, iterator) {
	var i, e;
	for (i = 0; i < arr.length; i++) {
		e = arr[i];
		iterator.call(arr, e);
	}
};

exports.each = each;

exports.removeEmptyLines = function(str) {
	var i, allText = '';
	each(str.split('\n'), function(line) {
		if(!S(line).isEmpty()) {
			allText += S(line).trim() + '\n';
		}
	});
	return allText;
};
