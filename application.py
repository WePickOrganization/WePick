import sys
sys.path.append('..')
import os
import json
import datetime
from db import DatabaseConnector
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo
from flask import Flask, request, render_template
from flask import jsonify
from bson.json_util import dumps
from spotify import SpotipyAPI


# Create instance of DatabaseConnector
databaseConnection = DatabaseConnector.DatabaseConnector()

# Create the Flask application and tell it where to look to serve HTML files
application = Flask(__name__, template_folder='react-frontend/templates', static_folder='react-frontend/static')

print(application.template_folder)

# Prepare the mongo instance
application.config["MONGO_URI"] = databaseConnection.getURI()


# Create the Mongo object with our Flask application
mongo = PyMongo(application)

# Extend the JSONEncoder class to support more stuff
class JSONEncoder(json.JSONEncoder):

    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        if isinstance(o, datetime.datetime):
            return str(o)
        return json.JSONEncoder.default(self, o)
    

# use the modified encoder class to handle ObjectId & datetime object while jsonifying the response.
application.json_encoder = JSONEncoder


# The default route for the application
@application.route("/")
def index():
  return render_template('index.html')


# Define the routes through our Flask applicationlication
@application.route('/loginUser', methods=['GET'])
def loginUser():
    # If the HTTP Request is a 'GET' request
    if request.method == 'GET':
        
        # Show that a GET request is being recieved
        print("\n - GET REQUEST RECIEVED - \n")

        # Take the query from the HTTP request argumments
        loginData = request.args

        # Store the arguments for easy querying
        password = loginData["password"]
        email = loginData["email"]
        
        # If the data is in the correct format
        if loginData is not None:
            # Query the database and get the data from the query
            databaseResponse = mongo.db.Users.aggregate([{ "$match": {"email": email,"password": password}}])

            # Parse the response as a list so we can check it's properties
            databaseResponseList = list(databaseResponse)

            # If the list is empty due to an error with login detaills, motify the user
            if databaseResponseList==[]:
                return jsonify({'ok': False, 'message': 'Record does not exist. Please check log-in parameters.'}), 400
            else:
                # Return the information as JSON with status code 200
                return jsonify({'ok': True, 'message': 'Record exists.. Logging in..'}), 200

        # Return a bad request response in JSON if the paramaters are incorrect
        return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

@application.route('/showUser', methods=['GET'])
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

# Define the routes through our Flask applicationlication
@application.route('/showAllUsers', methods=['GET'])
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
            print (document)

        # Return the information as JSON with status code 200
        return dumps(collectionList), 200

# Route for creating a user
@application.route('/createUser', methods=['POST'])
def createUser():

    # Define the incoming json data from the request as 'data'
    jsonData = request.get_json(force=True)

    # If the HTTP Request is a 'POST' request
    if request.method == 'POST':

       # Show that a GET request is being recieved
        print("\n - POST REQUEST RECIEVED - \n")

        # If the data is in the correct format
        if jsonData.get('email', None) is not None and jsonData.get('name', None) is not None and jsonData.get('password', None) is not None:
            # Successful response
            mongo.db.Users.insert_one(jsonData)
            return jsonify({'ok': True, 'message': 'User created successfully!'}), 200
        else:
            # Return a bad request response in JSON if the paramaters are incorrect
            return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 400

# Route for deleting a user
@application.route('/deleteUser', methods=['DELETE'])
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


@application.route('/updateUser', methods=['PATCH'])
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


# Notify the user the server is starting
print("Starting Flask server...")

# Run the application
if __name__ == '__main__':
  application.run()