#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

import os, sys, commands, signal
from flask import request
from flask.ext.script import Server, Manager
from webapp import app, db

db_name	= 'blackmamba'
db_user	= 'blackmamba'
db_pass	= 'blackmamba'

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://' + db_user + ':' + db_pass + '@localhost/blackmamba'
app.debug = True

manager = Manager(app)
manager.add_command('runserver', Server(host='0.0.0.0', port='5000'))

pid		= str(os.getpid())

@manager.command
def init_db():
	db.create_all()

@manager.command
def shutdown():
	func = request.environ.get('werkzeug.server.shutdown')
	if func is None:
		raise RuntimeError('Not running with the Werkzeug Server')
	func()

def sighandler(num, frame):
	os.remove('/var/tmp/python-run.lock.' + pid)
	sys.exit(0)

signal.signal(signal.SIGINT, sighandler)

if __name__ == "__main__":
	f = open('/var/tmp/python-run.lock.' + pid, 'w')
	f.close
	manager.run()
