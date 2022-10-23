from operator import truediv
from flask import Flask
from flask import request
from flask import abort
from flask import send_file
import string
import random

from activities import Activities
from mongo import Mongo

app = Flask(__name__)

userdb = Mongo()
@app.route('/survey', methods=['POST'])
def survey():
	content = request.get_json()
	if ("token" not in content):
		abort(400, "invalid")
	if ("activity" not in content):
		abort(400, "invalid")
	if ("waterScore" not in content["activity"]):
		abort(400, "invalid")
	if ("co2Score" not in content["activity"]):
		abort(400, "invalid")
	if ("serviceScore" not in content["activity"]):
		abort(400, "invalid")
	if ("wasteScore" not in content["activity"]):
		abort(400, "invalid")
	if ("impactScore" not in content["activity"]):
		abort(400, "invalid")

	if (not isinstance(content["token"], str)) or (len(content["token"]) != 64):
		abort(400, "invalid")

	for score in content["activity"]:
		if isinstance(content["activity"][score], int):
			if not ((content["activity"][score] >= 0) and (content["activity"][score] <= 100)):
				abort(400, "invalid score")
		else:
			abort(400, "invalid score")

	current_user = userdb.findByToken(content["token"])

	for key in content["activity"]:
		current_user.activities[key] += content["activity"][key]
	current_user.activities["numberOfActivities"] += 1

	userdb.update(current_user)

	ret = {"status" : "success"}
	return ret




@app.route('/token', methods=['POST'])
def token():
   content = request.get_json()
   if ("token" not in content):
      abort(400, "invalid")

   current_user = userdb.findByToken(content["token"])

   if current_user == None:
      abort(400, "invalid token")


   ret = {
      "status": "success",
      "user": {
         "username": current_user.username,
         "password": current_user.password,
         "name": current_user.name,
         "groupid": current_user.groupid,
         "company": "Vanderbilt University",
         "activities": {
               "waterScore": current_user.activities["waterScore"],
               "co2Score": current_user.activities["co2Score"],
               "serviceScore": current_user.activities["serviceScore"],
               "wasteScore": current_user.activities["wasteScore"],
               "impactScore": current_user.activities["impactScore"],
               "numberOfActivities": current_user.activities["numberOfActivities"]
         },
         "token": current_user.token,
         "city": current_user.city,
         "state": current_user.state,
         "email": current_user.email,
         "phoneNumber": current_user.phoneNumber,
      }
   }
   return ret



@app.route('/profilePicture', methods = ['GET'])
def profilePicture():
	username = request.args.get("q")
	pic_address = "./cdn/profile_picture/" + username + ".png"
	return send_file(pic_address, mimetype='image/png')



if __name__ == '__main__':
   app.run()