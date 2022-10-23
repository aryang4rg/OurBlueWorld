from operator import truediv
from flask import Flask
from flask import request
from flask import abort
import string
import random

from activities import Activities
from mongo import Mongo

app = Flask(__name__)

userdb = Mongo()

@app.route('/profile?q=<username>', methods = ['GET'])
def profile(username):
    user = userdb.get(username)
    dict = user.__dict__
    dict.pop("password")
    dict.pop("token")
    dict.pop("email")
    dict.pop("phoneNumber")
    return dict

if __name__ == '__main__':
   app.run()