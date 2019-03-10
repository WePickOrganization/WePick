import sys
sys.path.append("..")
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
from flask_jwt_extended import JWTManager
from flask_bcrypt import Bcrypt
from jsonschema import validate
from jsonschema.exceptions import ValidationError
from jsonschema.exceptions import SchemaError
from flask_jwt_extended import (create_access_token, create_refresh_token,
jwt_required, jwt_refresh_token_required, get_jwt_identity)

user_schema = {
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
        },
        "email": {
            "type": "string",
            "format": "email"
        },
        "password": {
            "type": "string",
        }
    },
    "required": ["email", "password"],
    "additionalProperties": False
}


# Create instance of DatabaseConnector
databaseConnection = DatabaseConnector.DatabaseConnector()

# Create the Flask application and tell it where to look to serve HTML files
application = Flask(__name__, template_folder='react-frontend/templates', static_folder='react-frontend/static')

# Prepare the mongo instance
application.config["MONGO_URI"] = databaseConnection.getURI()
application.config['JWT_ACCESS_TOKEN_EXPIRES'] =  datetime.timedelta(days=1)
application.config['PROPAGATE_EXCEPTIONS'] = True
application.config['SECRET_KEY'] = "'\xe9\xa5'"

# Create the Mongo object with our Flask application
mongo = PyMongo(application)
flask_bcrypt = Bcrypt(application)
jwt = JWTManager(application)


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

def validateRequest(jsonData):
    try:
        validate(jsonData, user_schema)
    except ValidationError as e:
        return {'ok': False, 'message': e}
    except SchemaError as e:
        return {'ok': False, 'message': e}
    return {'ok': True, 'data': jsonData}

# Authentication Stuff
@application.route('/refresh', methods=['POST'])
@jwt_refresh_token_required
def refresh():
    current_user = get_jwt_identity()
    ret = {
            'token': create_access_token(identity=current_user)
    }
    return jsonify({'ok': True, 'data': ret}), 200

@jwt.unauthorized_loader
def unauthorized_response(callback):
    return jsonify({
        'ok': False,
        'message': 'Missing Authorization Header'
    }), 401


# The default route for the application
@application.route("/")
def index():
  return render_template('index.html')

@application.route('/CreatePlaylist', methods=['POST'])
@jwt_required
def CreatePlaylist():
    jsonData = request.get_json(force=True)

    print(jsonData)
    print(jsonData['params']['artistOne'])
    print(jsonData['params']['artistTwo'])
    print(jsonData['params']['artistThree'])
    print(jsonData['params']['artistFour'])

    artistList = []

    
    artistList.append(jsonData['params']['artistOne'])
    artistList.append(jsonData['params']['artistTwo'])
    artistList.append(jsonData['params']['artistThree'])
    artistList.append(jsonData['params']['artistFour'])

    artistid = SpotipyAPI.GetArtistID(artistList)
    SpotipyAPI.GeneratePlaylist(artistid)
    print(artistList)
    return jsonify(jsonData)


# Define the routes through our Flask applicationlication
@application.route('/loginUser', methods=['POST'])
def loginUser():

    # If the HTTP Request is a 'GET' request
    if request.method == 'POST':
        
        # Show that a GET request is being recieved
        print("\n - POST REQUEST RECIEVED - \n")
        print("\n - In Route '/Login' - \n")
        
        loginData = request.get_json(force=True)

        # See json format
        jsonData = loginData['params']

        # Pass the jsonData into our function to validate it
        jsonData = validateRequest(jsonData)

        # If the data is in the correct format
        if jsonData['ok']:
            
            # Remove the ok part of JsonData
            jsonData = loginData['params']

            print(jsonData)

            user = mongo.db.Users.find_one({'email': jsonData['email']})
        
            # If the users password is correct
            if user and flask_bcrypt.check_password_hash(user['password'],jsonData['password']):

                print("Details correct!")

                # Delete their password and give them an access token
                del user['password']
                access_token = create_access_token(identity=jsonData)
                refresh_token = create_refresh_token(identity=jsonData)
                user['token'] = access_token
                user['refresh'] = refresh_token
                 # Return the information as JSON with status code 200
                return jsonify({'ok': True, 'data': user, 'message': 'Record exists.. Creating access token and Logging in..'}), 200

            else:
                print("Details incorrect!")

                # If the list is empty due to an error with login details, motify the user
                return jsonify({'ok': False, 'message': 'Record does not exist. Please check log-in parameters.'}), 401
        else:
            # Return a bad request response in JSON if the paramaters are incorrect
            return jsonify({'ok': False, 'message': 'Bad request parameters!'}), 402

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

    # If the HTTP Request is a 'POST' request
    if request.method == 'POST':

       # Show that a GET request is being recieved
        print("\n - POST REQUEST RECIEVED - \n")
            
        # Pass the jsonData into our function to validate it
        jsonData = validateRequest(request.get_json(force=True))
        
        # If the data is in the correct format
        if jsonData['ok']:
            
            # See json format
            jsonData = jsonData['data']

            # Encrypt the password before inserting it into the database
            jsonData['password'] = flask_bcrypt.generate_password_hash(jsonData['password'])

            mongo.db.Users.insert_one(jsonData)

            # Successful response
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

