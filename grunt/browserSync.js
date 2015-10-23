/**
 * @(#) grunt/browserSync.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt browserSync task setting file for grunt by load-grunt-config
**/

module.exports = {

	bsFiles : {
		src : 'webapp/', 
	},
	options : {
		watchTask : true,
		proxy : 'http://localhost:5000',
		host : '0.0.0.0'
	}
};
/*  vim: set ts=4 : */
