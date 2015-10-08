/**
 * @(#) grunt/copy.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt copy task setting file for grunt by load-grunt-config
**/

module.exports = { 
	html: {
		files: [{ 
			expand:		true,
			cwd:		'app',
			src:		[ 'templates/*.html' ],
			dest:		'./webapp/',
			dot:		false
		}]
	},
	css: {
		files: [{
			expand:		true,
			cwd:		'app/styles',
			src:		[ '**/*.css' ],
			dest:		'webapp/static/css/',
			dot:		false
		}]
	},
	py: {
		files: [{
			expand:		true,
			cwd:		'app',
			src:		[ '*.py' ],
			dest:		'./webapp/',
			dot:		false
		}]
	}
};
/* vim: set ts=4 : */