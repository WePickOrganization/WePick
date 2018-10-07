import pymongo
import pprint

# Setup Client
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

# Create database
myDatabase = myClient["flaskDatabase"]

# Create a list of all our databases and print them
dbList = myClient.list_database_names()
#print(myClient.list_database_names())

# Check to see if our database is in the list of databases
if "flaskDatabase" in dbList:
  print("\nDatabase found....")
else:
  print("No database found.")

# A collection in MongoDB is the same as a table in SQL databases.
# Create a collection called 'customers' and print all our collections
myCollection = myDatabase["Customers"]
print("\n---COLLECTIONS---")
print(myDatabase.list_collection_names())

# Create a list of all collections in the database 
collectionList = myDatabase.list_collection_names()

# Create a record to insert into our "Customers" collection
myDictionary = { "name": "John", "address": "Highway 117" }

# Insert the record into our collection and print what we just inserted
x = myCollection.insert_one(myDictionary)
print("\n---RECORDS---")
print(x.inserted_id)



# Check to see if our collection is in our database





