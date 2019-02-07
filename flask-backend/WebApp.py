import os
import sys
sys.path.append('..')
import json
import datetime
from db import DatabaseConnector
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo
import logger

# Create instance of DatabaseConnector
databaseConnection = DatabaseConnector.DatabaseConnector()

# Create the Flask app and tell it where to look to serve HTML files
app = Flask(__name__, template_folder='../react-frontend/templates', static_folder='../react-frontend/static')

# Prepare the mongo instance
app.config["MONGO_URI"] = databaseConnection.getURI()

# Create the Mongo object with our Flask app
mongo = PyMongo(app)

# Extend the JSONEncoder class to support more stuff
class JSONEncoder(json.JSONEncoder):

    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, datetime.datetime):
            return str(o)
        return json.JSONEncoder.default(self, o)


# use the modified encoder class to handle ObjectId & datetime object while jsonifying the response.
app.json_encoder = JSONEncoder



# Define the routes through our Flask application
@app.route('/user', methods=['GET', 'POST', 'DELETE', 'PATCH'])
def user():
    # If the HTTP Request is a 'GET' request
    if request.method == 'GET':
        
        # Take the query from the HTTP request argumments
        query = request.args

        # Query the database and get the data from the query
        data = mongo.db.WePickUsers.find_one(query)

    # Return the information as JSON with status code 200
    return jsonify(data), 200

@app.route("/")
def index():
  return render_template('index.html')

print("Starting Flask server...")

if __name__ == '__main__':
  app.run()