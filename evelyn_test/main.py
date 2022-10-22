from flask import Flask
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


if __name__ == '__main__':
   app.run()