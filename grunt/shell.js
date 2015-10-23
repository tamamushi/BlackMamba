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
		options: { async: true }
	},
	kill_app: {
		command: [ 'echo \"Find stop kill process... \"',
					'if [ ls /var/tmp/python-run.lock.* >/dev/null 2>&1 ]; then \
					for f in `ls /var/tmp/python-run.lock.*`; do \
						pid=`echo $f | awk \'match($0,/[0-9]+/) {print substr($0,RSTART,RLENGTH)}\'`; \
						if [ -x /proc/$pid ]; then kill $pid && echo "killing ... $pid"; \
						rm /var/tmp/python-run.lock.$pid; fi; done; fi' ].join('&&')
	},
	init_db: {
		command: 'python manage.py init_db'
	},
	init_lang: {
		command: [	'pybabel extract -F babel.cfg -k lazy_gettext -o assets/lang/.message.pot webapp/',
					'pybabel init -i assets/lang/.message.pot -d assets/lang/translations -l ja',
					'pybabel init -i assets/lang/.message.pot -d assets/lang/translations -l en',
					'pybabel init -i assets/lang/.message.pot -d assets/lang/translations -l zh',
					'pybabel init -i assets/lang/.message.pot -d assets/lang/translations -l ko',
					'pybabel init -i assets/lang/.message.pot -d assets/lang/translations -l th',
					'rm -rf assets/lang/.message.pot'].join('&&')
	},
	update_lang: {
		command: [	'pybabel extract -F babel.cfg -k lazy_gettext -o assets/lang/.message.pot webapp/',
					'pybabel update -i assets/lang/.message.pot -d assets/lang/translations'].join('&&')
	},
	build_lang: {
		command: 'pybabel compile -d assets/lang/translations' 
	}
};
/*  vim: set ts=4 : */
