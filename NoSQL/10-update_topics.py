#!/usr/bin/env python3
"""
Module 10-update_topics
Defines the update_topics function to update the topics of a school document.
"""


def update_topics(mongo_collection, name, topics):
    """
    Changes all topics of a school document based on the name.

    Args:
        mongo_collection: pymongo collection object.
        name (str): The school name to update.
        topics (list of str): The list of topics to set for the school.
    """
    if mongo_collection is None or not name or not isinstance(topics, list):
        return

    mongo_collection.update_many({"name": name}, {"$set": {"topics": topics}})
