/**
 * @(#) grunt/mngdb.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is mngdb task setting file for grunt by load-grunt-config
**/

var fs			= require("fs");
var password	= fs.readFileSync('/etc/my.cnf.d/password').toString().trim();

module.exports = {
	options: {
		user:		'root',
		password:	password,
		port:		3306,
		host:		'localhost',
		database:	'mysql',
	},
	adduser: {
		database: 'blackmamba',
		username: 'blackmamba',
		password: 'blackmamba',
		allow: 'localhost'
	},
	rmuser: {
		username: 'blackmamba',
		allow:    'localhost'
	},
	createdb: 'blackmamba',
	dropdb: 'blackmamba'
};

/* vim: set ts=4 : */
