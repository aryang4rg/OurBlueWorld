import json
from twilio.rest import Client

with open("tokens.json") as f:
	data = json.load(f)
	account_sid = data["account_sid"]
	auth_token = data["auth_token"]
	phone_number = data["phone_number"]

client = Client(account_sid, auth_token)

message = client.messages \
    .create(
         body='This is the ship that made the Kessel Run in fourteen parsecs?',
         from_=phone_number,
         to='+16692085445'
     )

print(message.sid)
