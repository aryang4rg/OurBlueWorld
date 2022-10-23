from operator import truediv
from flask import Flask
from flask import request
from flask import abort
import string
import random

from backend.activities import Activities

app = Flask(__name__)

@app.route('/')
def hello_world():
   return 'Hello World'

@app.route('/hello')
def good_morning():
   return 'Good Morning'

@app.route('/bye/<name>')
def bye_name(name):
   return 'Bye %s!' %name


@app.route('/signup', methods = ['POST'])
def sign_up():
   def check_string(category, user_dict):
      if (category not in user_dict):
         return False
      
      user_input = user_dict[category]

      if isinstance(user_input, str):
         if (len(user_input) >= 2) and (len(user_input) <= 50):
            return True
         else:
            return False
      else:
         return False
   
   content = request.get_json()
   print (content)

   if(not check_string("username", content)):
      abort(400, "invalid")
   if(not check_string("password", content)):
      abort(400, "invalid")
   if(not check_string("name", content)):
      abort(400, "invalid")
   if(not check_string("groupid", content)):
      abort(400, "invalid")
   if(not check_string("city", content)):
      abort(400, "invalid")
   if(not check_string("state", content)):
      abort(400, "invalid")
   if(not check_string("email", content)):
      abort(400, "invalid")
   if(not check_string("phoneNumber", content)):
      abort(400, "invalid")
   
   token = ''.join(random.choice(string.ascii_letters + string.digits) for _ in range(64))

   user_activities = Activities(0,0,0,0,0,0,0)

   ret = {
  "status" : "success", 
  "user" : {
   "username" : content["username"],
  "password" : content["password"], 
  "name" : content["name"],
  "groupid" : content["groupid"], 
  "company" : "Vanderbilt University",
  "activities" : {
      "waterScore" : user_activities.waterScore, 
      "co2Score" : user_activities.co2Score,
      "consumptionScore" : user_activities.consumptionScore,
      "serviceScore" : user_activities.serviceScore, 
      "wasteScore" : user_activities.serviceScore,
      "impactScore" : user_activities.impactScore,
      "numberOfActivities" : user_activities.numberOfActivities
    }, 
    "token" : token,
    "city" : content["city"],
    "state" : content["state"],
    "email" : content["email"],
    "phoneNumber" : content["phoneNumber"], 
  }
}
   return ret



if __name__ == '__main__':
   app.run()