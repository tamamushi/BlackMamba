/**
 * @(#) grunt/shell.js ver 1.0.0 2015.10.08
 * 
 * Description:
 *	This file is grunt shell task setting file for grunt by load-grunt-config
**/

module.exports = {
	run_app: {
		command: 'if [ 1 -gt `ps -Af | grep "python manage.py runserver" \
					| grep -v grep | wc -l` ]; then python manage.py runserver; fi >> /dev/null',
		options: { 
			async: true,
		 }
	}
};
/*  vim: set ts=4 : */
