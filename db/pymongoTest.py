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
pwFromConfigFile = configurationVariables[0].rstrip()
ipFromConfigFile = configurationVariables[1]

URI = "mongodb://mongo:"+str(pwFromConfigFile)+"@"+str(ipFromConfigFile)+"/?authSource=admin&authMechanism=SCRAM-SHA-1"

# Setup Client
myClient = pymongo.MongoClient(URI)

# Create database
WePickDatabase = myClient["WePickUsers"]

# Create a list of all our databases and print them
dbList = myClient.list_database_names()
print("=== DATABASE NAMES ===")
print(myClient.list_database_names())

# Check to see if our database is in the list of databases
if "WePickUsers" in dbList:
  print("\nDatabase found....")
  print(myClient.database_names)
else:
  print("No database found.")

# The collection of users in the database
usersCollection = WePickDatabase["Users"]

# Add user
def addUser(id, name, favoriteArtists, favoriteSong):
  usersCollection.insert_one({'id': id, 'name': name, 'fav_artist': favoriteArtists, 'fav_song': favoriteSong})
   
# Show users
def showUsers():
  for x in usersCollection.find():
    print(x)

# Delete user
def deleteUser(id):
  usersCollection.delete_one({'id': id}) 

# Test function
#addUser(123, 'Steven', 'BobMarley', 'Jamming')
showUsers()






