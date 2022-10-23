import json
from twilio.rest import Client
import sched, time


with open("./twilio/tokens.json") as f:
	data = json.load(f)
	account_sid = data["account_sid"]
	auth_token = data["auth_token"]
	phone_number = data["phone_number"]

client = Client(account_sid, auth_token)

def getMessage(place):
    if (place <= 3):
        return "You're currently in position " + str(place) + "! Keep up the great work!"
    elif (place <= 7):
        return "You're currently in position " + str(place) + "! Remember to enter your daily data!"
    else:
        return "You're currently in position " + str(place) + "! Don't fall too behind!"

s = sched.scheduler(time.time, time.sleep)
def sendText(text, number, client): 
    print(text)
    message = client.messages \
    .create(
         body=text,
         from_=phone_number,
         to='+14088929139'
     )
    print(message.sid)

# Resends the message over a period of time
num = 1 # Modified based on the user's position
s.enter(30, 1, sendText, getMessage(num), client)
s.run()