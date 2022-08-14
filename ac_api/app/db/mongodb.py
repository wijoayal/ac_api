from pymongo import MongoClient
from datetime import datetime

mongo_details = "mongodb+srv://root:root@cluster0.6b2ol.mongodb.net/?retryWrites=true&w=majority"
client = MongoClient(mongo_details)


db_datalake = client.datalake
collection_stats = db_datalake.stats
collection_history = db_datalake.history
collection_history.delete_many({})