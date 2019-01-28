import pymongo
import pprint

<<<<<<< HEAD
# Remote Connection URI
# # MongoDB Server Connection URI: mongo 54.76.32.181 --username mongo --authenticationDatabase admin -p


=======
>>>>>>> bbc578a95eb06905c0ff7be6db0cfc32f03c9edf
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
  print(myClient.database_names)
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
myList = [
  { "_id": 1, "name": "John", "address": "Highway 37"},
  { "_id": 2, "name": "Peter", "address": "Lowstreet 27"},
  { "_id": 3, "name": "Amy", "address": "Apple st 652"},
  { "_id": 4, "name": "Hannah", "address": "Mountain 21"},
  { "_id": 5, "name": "Michael", "address": "Valley 345"},
  { "_id": 6, "name": "Sandy", "address": "Ocean blvd 2"},
  { "_id": 7, "name": "Betty", "address": "Green Grass 1"},
  { "_id": 8, "name": "Richard", "address": "Sky st 331"},
  { "_id": 9, "name": "Susan", "address": "One way 98"},
  { "_id": 10, "name": "Vicky", "address": "Yellow Garden 2"},
  { "_id": 11, "name": "Ben", "address": "Park Lane 38"},
  { "_id": 12, "name": "William", "address": "Central st 954"},
  { "_id": 13, "name": "Chuck", "address": "Main Road 989"},
  { "_id": 14, "name": "Viola", "address": "Sideway 1633"}
]

# Insert the record into our collection
x = myCollection.insert_many(myList)

# Print the ID's of each record
print("\n---RECORDS(ID)---")
print(x.inserted_ids)

# Print the name of each record
print("\n---NAMES---\n")
#findOneDocument = myCollection.find_one()
#print(findOneDocument)

# Print the address of each recrod
#print("\n---ADDRESSES---\n")
#print(x.inserted_ids)









