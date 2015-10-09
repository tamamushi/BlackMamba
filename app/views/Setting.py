#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

from flask import render_template
from flask.ext.classy import FlaskView

class SettingView(FlaskView):
	def index(self):
		return render_template('setting.html')
