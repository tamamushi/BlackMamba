/**
 * @(#) grunt/shell.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt shell task setting file for grunt by load-grunt-config
**/

module.exports = {
	run_app: {
		command: '[ 1 -eq `ps -ef | grep "webapp && python" | grep -v grep | wc -l` ] && cd webapp && python app.py',
		options: { async: true }
	}
};
/*  vim: set ts=4 : */
