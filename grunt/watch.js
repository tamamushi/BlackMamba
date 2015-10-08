/**
 * @(#) grunt/watch.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt watch task setting file for grunt by load-grunt-config
**/

module.exports = {
	assets: {
		files: ['./app/templates/*.html', './app/styles/*.css' ],
		tasks: ['copy:html', 'copy:css']
	},
	app: {
		files: ['./app/*.py'],
		tasks: ['copy:py', 'shell:run_app']
	}
};
/*  vim: set ts=4 : */
