#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

import os
from functools import wraps
from flask import request, render_template, redirect, url_for, session, flash, g
from webapp import app, db
from webapp.models import User
from flask.ext.babel import gettext
from webapp.views import Setting

def login_required(f):
	@wraps(f)
	def decorated_view(*args, **kwargs):
		if g.user is None:
			return redirect(url_for('login', next=request.path))
		return f(*args, **kwargs)
	return decorated_view

@app.before_request
def load_user():
	user_id = session.get('user_id')
	if user_id is None:
		g.user = None
	else:
		g.user = User.query.get(session['user_id'])

@app.route('/index/<name>')
@login_required
def index(name=''):
	if name == '':
		name = u'こんにちは'
	return render_template('index.html', name=name)

## authentication method for login user
@app.route('/auth', methods=['POST'])
def auth():
	if request.method == 'POST':
		user, authenticated = User.authenticate(db.session.query,
				request.form['username'], request.form['password'])
		if authenticated:
			session['user_id'] = user.id
			##flash('You were logged in')
			return redirect(url_for('index', name=user.uname))
		else:
			flash(gettext('Invalid username or password'))
	return render_template('login.html')

@app.route('/logout')
def logout():
	session.pop('user_id', None)
	return redirect(url_for('login'))

@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/register')
def register():
	return render_template('register.html')

@app.route('/user/create/', methods=['POST'])
def user_create():
	if request.method == 'POST':
		user = User(uname=request.form['username'],
					password=request.form['password'])
		db.session.add(user)
		db.session.commit()
		session['user_id'] = user.id
		return redirect(url_for('index', name=user.uname))
	return render_template('register.html')

@app.route('/template/<file_name>')
def template(file_name=''):
	return render_template(file_name + '.html')

Setting.SettingView.register(app)

