/**
 * @(#) Gruntfile.js ver 1.0.0 2015.09.14
 * 
 * Description:
 *	This file is dependency setting for grunt
**/

var path = require('path');
var grunt = require('grunt');
module.exports = function (grunt) {
	'use strict';

	require('load-grunt-config')(grunt, {
		init: true,
		loadGruntTasks: {
			pattern: 'grunt-*',
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	});

	var os			= require('os');
	var interfaces	= os.networkInterfaces();
	for (var dev in interfaces) {
		grunt.log.writeln(interfaces[dev][0].address)
	}

	grunt.task.loadTasks("grunt/task");
};

/*  vim: set ts=4 : */
