import pymongo
import pprint
from pymongo import MongoClient

# Remote Connection URI
# # MongoDB Server Connection URI: mongo 54.76.32.181 --username mongo --authenticationDatabase admin -p

# Load in the password and IP address for the database from a config file found locally
with open("config.txt", "r") as ins:
    configurationVariables = []
    for line in ins:
        configurationVariables.append(line)

# Asign the variables found in 
pwFromConfigFile = configurationVariables[0]
ipFromConfigFile = configurationVariables[1]

URI = "mongodb://mongo:"+str(pwFromConfigFile)+"@"+str(ipFromConfigFile)+"/?authSource=admin&authMechanism=SCRAM-SHA-1"

# Setup Client
myClient = pymongo.MongoClient(URI)

# Create database
myDatabase = myClient["WePickUsers"]

# Create a list of all our databases and print them
dbList = myClient.list_database_names()
print(myClient.list_database_names())

# Check to see if our database is in the list of databases
if "WePickUsers" in dbList:
  print("\nDatabase found....")
  print(myClient.database_names)
else:
  print("No database found.")

# A collection in MongoDB is the same as a table in SQL databases.
# Create a collection called 'Users' and print all our collections
myCollection = myDatabase["Users"]
print("\n---COLLECTIONS---")
print(myDatabase.list_collection_names())

# Create a list of all collections in the database 
collectionList = myDatabase.list_collection_names()

# Create a record to insert into our "Customers" collection
listOfUsers = [
  { "_id": 1, "name": "Eddie", "fav_song": "In the Air Tonight", "fav_artist": "Nujabes"},
  { "_id": 2, "name": "Keith", "fav_song": "GOTTI", "fav_artist": "6ix9ine"},
  { "_id": 3, "name": "Daniellis", "fav_song": "Only Time", "fav_artist": "Enya"}
]

# Insert the record into our collection
x = myCollection.insert_many(listOfUsers)

# Print the ID's of each record
print("\n---RECORDS(ID)---")
print(x.inserted_ids)

# Print the name of each record
print("\n---NAMES---\n")
findOneDocument = myCollection.find_one()
print(findOneDocument)

# Print the address of each recrod
print("\n---ADDRESSES---\n")
print(x.inserted_ids)









