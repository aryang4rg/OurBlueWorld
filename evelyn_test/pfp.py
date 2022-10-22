from PIL import Image
import requests
from io import BytesIO
import base64

file_address = "./evelyn_test/cdn/aryan.txt"

pfp_address = "./evelyn_test/cdn/profile_picture/aryan.jpg"

file = open(file_address, 'r')
url = file.read()
file.close()

image_base64 = url.split(",", 1)[1]

decoded_data=base64.b64decode((image_base64))
#write the decoded data back to original format in  file
img_file = open(pfp_address, 'wb')
img_file.write(decoded_data)
img_file.close()

response = requests.get(url)
img = Image.open(BytesIO(response.content))