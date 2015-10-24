#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

import os
from functools import wraps
from flask import request, render_template, redirect, url_for, session, flash, g
from flask.ext.babel import gettext
from flask.ext.login import login_required, login_user, logout_user
from webapp import app, db, login_manager
from webapp.models import User
from webapp.views import Setting

@login_manager.user_loader
def load_user(user_id):
	return User.query.get(user_id)

@app.route('/index/<name>')
@login_required
def index(name=''):
	if name == '':
		name = u'こんにちは'
	return render_template('index.html', name=name)

@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/register')
def register():
	return render_template('register.html')

@app.route('/logout')
@login_required
def logout():
	logout_user();
	return redirect(url_for('login'))

## authentication method for login user
@app.route('/auth', methods=['POST'])
def auth():
	remember_me	= False
	if request.method == 'POST':
		user, authenticated = User.authenticate(db.session.query,
				request.form['username'], request.form['password'])
		if 'remember' in request.form:
			remember_me = True
		if authenticated:
			login_user(user, remember = remember_me)
			##flash('You were logged in')
			return redirect(url_for('index', name=user.uname))
		else:
			flash(gettext('Invalid username or password'))
	return render_template('login.html')

@app.route('/user/create/', methods=['POST'])
def user_create():
	if request.method == 'POST':
		user = User(uname=request.form['username'],
					password=request.form['password'])
		db.session.add(user)
		db.session.commit()
		login_user(user)
		return redirect(url_for('index', name=user.uname))
	return render_template('register.html')

@app.route('/template/<file>')
def template(file=''):
	if file == '':
		file = 'setting'	
	return render_template(file + '.html')

Setting.SettingView.register(app)

