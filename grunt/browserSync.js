/**
 * @(#) grunt/browserSync.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt browserSync task setting file for grunt by load-grunt-config
**/

module.exports =  {
	bsFiles : {
		src : 'webapp/templates/*.html',
	},
	options : {
		watchTask : true,
		proxy : '192.168.33.14:5000',
		host : '0.0.0.0'
	}
};
/*  vim: set ts=4 : */
