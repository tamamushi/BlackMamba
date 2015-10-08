/**
 * @(#) Gruntfile.js ver 1.0.0 2015.09.14
 * 
 * Description:
 *	This file is dependency setting for grunt
**/

var path = require('path');
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
};

/*  vim: set ts=4 : */
