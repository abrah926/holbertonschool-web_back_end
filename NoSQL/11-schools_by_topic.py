from pymongo import MongoClient


def insert_school(mongo_collection, **kwargs):
    """Insert a document into the collection."""
    return mongo_collection.insert_one(kwargs).inserted_id


def schools_by_topic(mongo_collection, topic):
    """
    Find all schools that have a specific topic.

    Args:
        mongo_collection: The pymongo collection object.
        topic (str): The topic to search for.

    Returns:
        List of schools (documents) matching the topic.
    """
    return mongo_collection.find({"topics": topic})
