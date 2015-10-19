#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

from flask import render_template, login_required
from flask.ext.classy import FlaskView

class SettingView(FlaskView):

	@login_required
	def index(self):
		return render_template('setting.html')
