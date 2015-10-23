#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

import os
from functools import wraps
from flask import Flask, request, url_for, redirect, g
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.babel import gettext, Babel
from flask.ext.login import LoginManager

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = os.environ.get('DATABASE_URL')
app.secret_key						  = os.urandom(24)

babel						= Babel(app)
db							= SQLAlchemy(app)

login_manager				= LoginManager()
login_manager.login_view	= 'login'
login_manager.init_app(app)

@babel.localeselector
def get_locale():
	return request.accept_languages.best_match(['ko', 'zh', 'th', 'ja', 'ja_JP', 'en'])

import webapp.view, webapp.models
