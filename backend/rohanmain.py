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

if __name__ == '__main__':
   app.run()