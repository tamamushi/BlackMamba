/**
 * @(#) Gruntfile.js ver 1.0.0 2015.09.14
 * 
 * Description:
 *	This file is dependency setting for grunt
**/

var path = require('path');
module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),
		watch : {
			files: 'app/*.html',
			tasks: ['copy']
		},
		copy : {
			main: {
				files: [{
					expand: true,
					cwd: 'app',
					src: [
						'*.html'
					],
					dest: './webapp/templates',
					dot: false
				}]
			}
		},
		bower: {
			install: {
				options: {
					targetDir: './webapp/static',
					layout: function(type, component) {
						return path.join(type)
					},
					install: true,
					verbose: true,
					cleanTargetDir: true,
					cleanBowerDir: false
				}
			}
		},
		browserSync : {
			bsFiles : {
				src : 'webapp/templates/*.html',
			},
			options : {
				watchTask : true,
				proxy : '192.168.1.102:5000',
				host : '192.168.1.102'
			}
		}
	});

	var cwd = process.cwd();
	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['copy','bower:install', 'browserSync', 'watch']);
	grunt.registerTask('build', ['copy','bower:install']);
};

/*  vim: set ts=4 : */
