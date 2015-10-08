/**
 * @(#) grunt/shell.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt shell task setting file for grunt by load-grunt-config
**/

module.exports = {
	run_app: {
		command: 'if [ ! 1 -eq `ps -Af | grep "webapp && python" \
					| grep -v grep | wc -l` ]; then cd webapp && python app.py; fi',
		options: { async: true }
	}
};
/*  vim: set ts=4 : */
