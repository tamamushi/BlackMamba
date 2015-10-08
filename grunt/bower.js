/**
 * @(#) grunt/bower.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt bower task setting file for grunt by load-grunt-config
**/

var path = require('path');
module.exports = {
	build: {
		options: {
			targetDir:	'./webapp/static',
			layout:		function(type, component) {
							return path.join(type)
						},
			install:		true,
			verbose:		true,
			cleanTargetDir: true,
			cleanBowerDir: false
		}
	}
};

/* vim: set ts=4 : */
