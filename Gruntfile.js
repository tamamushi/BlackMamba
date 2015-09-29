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
		clean: ['webapp'],
		watch : {
			assets: {
				files: ['./app/templates/*.html', './app/styles/*.css' ],
				tasks: ['copy:html', 'copy:css']
			},
			app: {
				files: ['./app/*.py'],
				tasks: ['copy:py', 'shell:run_app']
			}
		},
		shell: {
			run_app: {
				command: 'cd webapp && python app.py',
				options: { async: true }
			}
		},
		copy : {
			html: {
				files: [{ expand: true, cwd: 'app',
					src: [ 'templates/*.html' ],
					dest: './webapp/', dot: false 
				}]},
			css: {
				files: [{
					expand: true, cwd: 'app/styles',
					src: [ '**/*.css' ],
					dest: 'webapp/static/css/', dot: false
				}]},
			py: {
				files: [{ expand: true, cwd: 'app',
					src: [ '*.py' ],
					dest: './webapp/', dot: false 
				}]},
		},
		bower: {
			build: {
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
				proxy : '192.168.33.12:5000',
				host : '192.168.33.12'
			}
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');
	grunt.loadNpmTasks('grunt-bower-task');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-shell-spawn');

	grunt.registerTask('clean', 'clean:build');
/*	grunt.registerTask('default', ['copy','bower:build', 'browserSync', 'watch']); */

	grunt.registerTask('serve', [
					'bower:build',
					'copy:html', 'copy:css', 'copy:py' ,
 					'shell:run_app',
					'browserSync',
					'watch'
					]);

	grunt.registerTask('build', ['copy:html', 'copy:css','bower:build']);
};

/*  vim: set ts=4 : */
