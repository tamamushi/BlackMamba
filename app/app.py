#!/bin/env python
# coding: utf-8

import os
from flask import Flask, render_template

app = Flask(__name__)
app.debug = True

@app.route('/')
def index():
    return u'テスト'


@app.route('/hello/<name>')
def hello(name=''):
    if name == '':
       name = u'ななしさん'
    return render_template('index.html', name=name)


@app.route('/debug')
def debug():
    return render_template('notemplate.html')


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host="0.0.0.0", port=port)
