var cli = require('celeri');

cli.option({
	command: 'scrape',
	description: 'Scrapes the lunch menu'
}, function() {
	require('./app/scrape');
});

cli.parse(process.argv);