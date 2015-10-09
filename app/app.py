#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

import os
from flask import Flask, render_template
import views.Setting

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
	return u'テスト'

@app.route('/hello/<name>')
def hello(name=''):
	if name == '':
		name = u'こんにちは'
	return render_template('index.html', name=name)

@app.route('/login')
def login():
	return render_template('login.html')

@app.route('/template/<file_name>')
def template(file_name=''):
	return render_template(file_name + '.html')

@app.route('/debug')
def debug():
    return render_template('notemplate.html')

views.Setting.SettingView.register(app)

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0", port=port)
