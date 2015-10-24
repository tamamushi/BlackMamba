/**
 * @(#) grunt/copy.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt copy task setting file for grunt by load-grunt-config
**/

module.exports = { 
	images: {
		files: [{ 
			expand:		true,
			cwd:		'src/images',
			src:		[ '**/*' ],
			dest:		'./webapp/static/images/',
			dot:		false
		}]
	},
	html: {
		files: [{ 
			expand:		true,
			cwd:		'src',
			src:		[ 'templates/*.html' ],
			dest:		'./webapp/',
			dot:		false
		}]
	},
	css: {
		files: [{
			expand:		true,
			cwd:		'src/styles',
			src:		[ '**/*.css' ],
			dest:		'webapp/static/css/',
			dot:		false
		}]
	},
	lang: {
		files: [{ 
			expand:		true,
			cwd:		'assets/lang',
			src:		[ 'translations/**/**/*.mo' ],
			dest:		'./webapp/',
			dot:		false
		}]
	},
	py: {
		files: [{
			expand:		true,
			cwd:		'src',
			src:		[ '*.py', 'views/*.py' ],
			dest:		'./webapp/',
			dot:		false
		}]
	}
};
/* vim: set ts=4 : */
