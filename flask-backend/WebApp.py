import os
import sys
sys.path.append('..')
import json
import datetime
from db import DatabaseConnector
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo
from flask import Flask, request, render_template
from flask import jsonify
from bson.json_util import dumps

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
@app.route('/showUser', methods=['GET'])
def showUser():
    # If the HTTP Request is a 'GET' request
    if request.method == 'GET':
        
        # Show that a GET request is being recieved
        print("\n - GET REQUEST RECIEVED - \n")

        # Take the query from the HTTP request argumments
        query = request.args

        # Query the database and get the data from the query
        databaseResponse = mongo.db.Users.find_one(query)
        
        # Return the information as JSON with status code 200
        return jsonify(databaseResponse), 200


# Define the routes through our Flask application
@app.route('/showAllUsers', methods=['GET'])
def showAllUsers():
    # If the HTTP Request is a 'GET' request
    if request.method == 'GET':
        
        # Show that a GET request is being recieved
        print("\n - GET REQUEST RECIEVED - \n")

        # Take the query from the HTTP request argumments
        query = request.args

        # Query the database and get the data from the query
        databaseResponse = mongo.db.Users.find()
        
        collectionList = list(databaseResponse)\

        # Print the entries in the console
        for document in databaseResponse:
            print document

        # Return the information as JSON with status code 200
        return dumps(collectionList), 200

# Route for creating a user
@app.route('/createUser', methods=['POST'])
def createUser():

    # Define the incoming json data from the request as 'data'
    jsonData = request.get_json(force=True)

    # If the HTTP Request is a 'POST' request
    if request.method == 'POST':

       # Show that a GET request is being recieved
        print("\n - POST REQUEST RECIEVED - \n")

        # If the data is in the correct format
        if jsonData.get('fav_artist', None) is not None and jsonData.get('name', None) is not None:
            # Successful response
            mongo.db.Users.insert_one(jsonData)
            return jsonify({'ok': True, 'message': 'User created successfully!'}), 200
        else:
            # Return a bad request response in JSON if the paramaters are incorrect
            return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

# Route for deleting a user
@app.route('/deleteUser', methods=['DELETE'])
def deleteUser():

    # Define the incoming json data from the request as 'data'
    jsonData = request.get_json(force=True)

     # If the HTTP Request is a 'DELETE' request
    if request.method == 'DELETE':

        # Show that a GET request is being recieved
        print("\n - DELETE REQUEST RECIEVED - \n")

        # If the data is in the correct format
        if jsonData.get('name', None) is not None:
            db_response = mongo.db.Users.delete_one({'name': jsonData['name']})
            if db_response.deleted_count == 1:
                response = {'ok': True, 'message': 'Record deleted'}
            else:
                response = {'ok': True, 'message': 'No record found'}
            return jsonify(response), 200
        else:
          return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400


@app.route('/updateUser', methods=['PATCH'])
def updateUser():

    # Define the incoming json data from the request as 'data'
    jsonData = request.get_json(force=True)

    # If the HTTP Request is a 'PATCH' request
    if request.method == 'PATCH':

        # Show that a GET request is being recieved
        print("\n - PATCH REQUEST RECIEVED - \n")

        # If the data is in the correct format
        if jsonData.get('query', {}) != {}:
            mongo.db.Users.update_one(
                jsonData['query'], {'$set': jsonData.get('payload', {})})
            return jsonify({'ok': True, 'message': 'Record updated'}), 200
        else:
          return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

# The default route for the app
@app.route("/")
def index():
  return render_template('index.html')

# Notify the user the server is starting
print("Starting Flask server...")

# Run the app
if __name__ == '__main__':
  app.run()