/**
 * @(#) grunt/task/grunt-mngdb.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is mngdb task running for grunt
**/
'use strict';
var mysql = require('mysql');

module.exports = function (grunt) {

	grunt.registerMultiTask('mngdb', 'management database', function() {

		var cmd	 	= this.target;
		var data	= this.data;
		var opts 	= this.options({
			user:		'root',
			database:	'mysql',
		});

		//var done	= this.async();
		var conn 	= mysql.createConnection(opts);

		switch(cmd) {
		case 'createdb':
			var q = conn.query(
						'CREATE DATABASE ' + data,
						function(err, res) {
							if (err) grunt.fail.fatal(q.sql + '\nfatal error: ' + err.stack);
							if (!err) console.log(res);
						});
			break;
		case 'dropdb':
			var q = conn.query(
					'DROP DATABASE IF EXISTS ' + data,
					function(err, res) {
						if (err) grunt.fail.fatal(q.sql + '\nfatal error: ' + err.stack);
						if (!err) console.log(res);
						conn.end();
					});
			break;
		case 'adduser':
			var d	= data;
			var sql	= 'GRANT SELECT, INSERT, UPDATE ON ' + d.table + '.* TO ' + d.user;
				sql	= sql + '@"' + d.allow + '" IDENTIFIED BY "' + d.pass + '"'; return;
		case 'rmuser':
		default:
			grunt.fail.fatal(fmt('Unknown target: %s', cmd));
		}
	});
};
/* vim: set ts=4 : */
