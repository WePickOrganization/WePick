import pymongo

# Setup Client
myClient = pymongo.MongoClient("mongodb://localhost:27017/")

# Create database
myDatabase = myClient["flaskDatabase"]

# Create a list of all our databases
dbList = myClient.list_database_names()

# Check to see if our database is in the list of databases
if "flaskDatabase" in dbList:
  print("The database exists.")
else:
  print("No database found.")

# Create a collection
# A collection in MongoDB is the same as a table in SQL databases.
myCollection = myDatabase["Customers"]

# Create a list of all collections in the database
collectionList = myDatabase.list_collection_names()

# Create a record to insert into our "Customers" collection
myDocument = { "name": "John", "number": "117" }
myDocument = { "name": "Eddie", "number": "118" }
myDocument = { "name": "Luke", "number": "119" }

# Insert the record into our collection
x = myCollection.insert_one(myDocument)
print(x.inserted_id)

# Check to see if our collection is in our database
if "Customers" in collectionList:
    print("The collection exists.")
    print("---Contents of the collection---")

else:
    print("The collection does not exist.")





