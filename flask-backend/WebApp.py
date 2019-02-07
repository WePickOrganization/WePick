import os
import sys
sys.path.append('..')
import json
import datetime
from db import DatabaseConnector
from bson.objectid import ObjectId
from flask import Flask
from flask_pymongo import PyMongo

# Create instance of DatabaseConnector
databaseConnection = DatabaseConnector.DatabaseConnector()

# Create the Flask app and tell it where to look to serve HTML files
app = Flask(__name__, template_folder='../react-frontend/templates', static_folder='../react-frontend/static')

# Prepare the mongo instance
app.config["MONGO_URI"] = databaseConnection.getURI()

print(databaseConnection.getURI())

@app.route("/")
def index():
  return render_template('index.html')

print("Starting Flask server...")

if __name__ == '__main__':
  app.run()