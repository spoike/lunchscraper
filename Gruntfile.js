module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['Gruntfile.js', 'lunch.js', 'app/*.js']
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	
	grunt.registerTask('default', ['jshint']);
	
};