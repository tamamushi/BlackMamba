#!/bin/env python
# -*- coding: utf-8 -*-
# vim:set ts=4 fenc=utf-8:

from webapp import db
from werkzeug import generate_password_hash, check_password_hash
from sqlalchemy.orm import synonym
from sqlalchemy import Column, Integer, String, Unicode, UnicodeText, ForeignKey

class User(db.Model):
	__tablename__ = 'users'

	id			= Column(Integer, primary_key=True)
	uname		= Column(String(18), unique=True, nullable=False)
	_password	= Column('password', String(100), nullable=False);

	def _get_password(self):
		return self._password

	def _set_password(self, password):
		if password:
			password = password.strip()
		self._password = generate_password_hash(password)

	password_descriptor	= property(_get_password, _set_password)
	password = synonym('_password', descriptor=password_descriptor)

	def check_password(self, password):
		password = password.strip()
		if not password:
			return False
		return check_password_hash(self.password, password)

	@classmethod
	def authenticate(cls, query, uname, password):
		user = query(cls).filter(cls.uname == uname).first()
		if user is None:
			return None, False
		return user, user.check_password(password)

	def __repr__(self):
		return u'<User id={self.id} uname={self.uname!r}>'.format(self=self)

def init():
	db.create_all()
