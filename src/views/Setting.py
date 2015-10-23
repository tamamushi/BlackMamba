#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

from flask import render_template
from flask.ext.classy import FlaskView
from flask.ext.login import login_required

class SettingView(FlaskView):
	@login_required
	def index(self):
		return render_template('setting.html')
