#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

import os, commands
from flask.ext.script import Server, Manager
from flask.ext.sqlalchemy import SQLAlchemy
from webapp import app

root_dbpass = '09842d8897cf947d'
db_name	= 'blackmamba'
db_user	= 'blackmamba'
db_pass	= 'blackmamba'

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://' + db_user + ':' + db_pass + '@192.168.1.104/blackmamba'
db		= SQLAlchemy(app)

manager = Manager(app)
manager.add_command('runserver', Server(host='0.0.0.0', port='5000'))

@manager.command
def init_db():
	grant_statement	= '/usr/bin/mysql --password=' + root_dbpass + ' -uroot -e "GRANT ALL PRIVILEGES ON '
	grant_statement	= grant_statement + db_name + '.* TO ' + db_user + '@'
	grant_statement	= grant_statement + '\'192.168.%\' IDENTIFIED BY \'' + db_pass + '\'"'
	print grant_statement
	os.system(grant_statement)
	db.create_all()


if __name__ == "__main__":
	manager.run()
