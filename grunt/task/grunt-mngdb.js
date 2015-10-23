/**
 * @(#) grunt/task/grunt-mngdb.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is mngdb task running for grunt
**/
'use strict';
var mysql = require('mysql');

module.exports = function (grunt) {

	function execute(sql, opts, done, callback) {
		var conn = mysql.createConnection(opts);

		var q = conn.query(sql,
			function(err, res, fields) {
				if (err) {
					switch(err.code) {
						/* database exists error when try to create database */
						case 'ER_DB_CREATE_EXISTS':
 							console.log(q.sql + ": already exists!"); done(err);
							break;
						default:
							grunt.fail.fatal(q.sql + '\nfatal error: ' + err.stack);
					}
				} else if (!err) {
					console.log(q.sql + ": success!");
					done(err);
				}
				/*
				if (typeof (collback) == "function" ) { 
					console.log("ok");
					//callback(err, res, fields, done);
				}
				*/
		});
		conn.end();
	}

	grunt.registerMultiTask('mngdb', 'management database', function() {

		var cmd	 	= this.target;
		var data	= this.data;
		var opts 	= this.options({
			user:		'root',
			database:	'mysql',
		});

		var done	= this.async();
		var conn 	= mysql.createConnection(opts);

		switch(cmd) {
		case 'createdb':
			execute('CREATE DATABASE ' + data, opts, done);
			break;
		case 'dropdb':
			execute('DROP DATABASE IF EXISTS ' + data, opts, done);
			break;
		case 'adduser':
			var d	= data;
			var sql	= 'GRANT SELECT, INSERT, UPDATE, CREATE, DROP ON ' + d.database + '.* TO ' + d.username;
				sql	= sql + '@"' + d.allow + '" IDENTIFIED BY "' + d.password + '"'; 
			execute(sql, opts, done);
			break;
		case 'rmuser':
			var d	= data;
			execute('drop user ' + d.username + '@"' + d.allow + '"', opts, done);
			break;
		default:
			grunt.fail.fatal(fmt('Unknown target: %s', cmd));
		}
	});
};
/* vim: set ts=4 : */
