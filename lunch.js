var cli = require('celeri');

cli.option({
	command: 'scrape OR scrape :file',
	description: 'Scrapes the lunch menu'
}, function(data) {
	console.log("Scraping the menu...".green);
	var scraper = require('./app/scraper');
	scraper.scrape(data.file);
});

cli.parse(process.argv);