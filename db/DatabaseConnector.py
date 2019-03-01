import sys
sys.path.append('..')
import pymongo
import pprint

# Remote Connection URI
# # MongoDB Server Connection URI: mongo 54.76.32.181 --username mongo --authenticationDatabase admin -p
class DatabaseConnector:

        def __init__(self):

            print("DatabaseConnector initialized...")

            # Load in the password and IP address for the database from a config file found locally
            with open("../db/config.txt", "r") as ins:
                configurationVariables = []
                for line in ins:
                    configurationVariables.append(line)

            # Asign the variables found in 
            pwFromConfigFile = configurationVariables[0].rstrip()
            ipFromConfigFile = configurationVariables[1]

            URI = "mongodb://mongo:"+str(pwFromConfigFile)+"@"+str(ipFromConfigFile)+"/WePickUsers?authSource=admin&authMechanism=SCRAM-SHA-1"

            # Setup Client
            myClient = pymongo.MongoClient(URI)

            # Create database
            WePickDatabase = myClient["WePickUsers"]

            # Create a list of all our databases and print them
            dbList = myClient.list_database_names()
            print("\n=== DATABASE NAMES ===")
            print(myClient.list_database_names())

            # Check to see if our database is in the list of databases
            if "WePickUsers" in dbList:
              print("\nDatabase WePickUsers found from the list....\n")
            else:
              print("Database WePickUsers was not found.")

            # The collection of users in the database
            print("\nSearching for Users collection in WePickUsers database...\n")

            usersCollection = WePickDatabase["Users"]
          
            if usersCollection is not None:
              print("\nUsers collection found!\n")
            else:
              print("\nUserrs collection could not be found.\n")
            
            # Setters
            self.usersCollection = usersCollection
            self.URI = URI
            self.myClient = myClient
            self.WePickDatabase = WePickDatabase

         
        		
        # Getters
        def getUsersCollection(self):
          return self.usersCollection
        
        def getURI(self):
          return self.URI

        def getClient(self):
          return self.myClient

        def getDatabase(self):
          return self.WePickDatabase

        # === FUNCTIONS === *
        
        # Add user
        def addUser(self, id, name, favoriteArtists, favoriteSong):
          self.usersCollection.insert_one({'id': id, 'name': name, 'fav_artist': favoriteArtists, 'fav_song': favoriteSong})
          
        # Show users
        def showUsers(self):
          for x in self.usersCollection.find():
            print(x)
            
		
        # Delete user
        def deleteUser(self, id):
          self.usersCollection.delete_one({'id': id}) 
        
        # Shows user and favourite Artist from database
        def showUsersFavArtist(self):
          all = dict()
          for x in self.usersCollection.find({},{'name':1,'fav_artist':1}):
            print(x)
            print(type(x))
            all.update(x)
          return all
	
		    # self.usersCollection.find({name:1,fav_artist:1})
        
        # Test function
        #addUser(123, 'Steven', 'BobMarley', 'Jamming')






