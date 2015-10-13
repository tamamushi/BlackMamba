#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

import os
from flask import Flask, render_template, redirect, url_for
from webapp import app
## import views.Setting

@app.route('/index/<name>')
def index(name=''):
	if name == '':
		name = u'こんにちは'
	return render_template('index.html', name=name)

## authentication method for login user
@app.route('/auth', methods=['POST'])
def auth():
	name = u'さぶろー'
	return redirect(url_for('index', name=name))

@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/logout')
def logout():
	return redirect(url_for('login'))

@app.route('/template/<file_name>')
def template(file_name=''):
	return render_template(file_name + '.html')

@app.route('/debug')
def debug():
    return render_template('notemplate.html')

## views.Setting.SettingView.register(app)

