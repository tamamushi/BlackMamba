/**
 * @(#) grunt/watch.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt watch task setting file for grunt by load-grunt-config
**/

module.exports = {
	html: {
		files: ['./src/templates/*.html'],
		tasks: ['copy:html', 'shell:update_lang']
	},
	css: {
		files: ['./src/styles/*.css'],
		tasks: ['copy:css']
	},
	lang: {
		files: ['./assets/lang/translations/**/**/*.po'],
		tasks: ['shell:build_lang', 'copy:lang']
	},
	app: {
		files: ['./src/*.py', './src/views/*.py' ],
		tasks: ['copy:py', 'shell:update_lang', 'shell:kill_app', 'shell:run_app']
	}
};
/*  vim: set ts=4 : */
