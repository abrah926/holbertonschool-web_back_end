#!/usr/bin/env python3
"""
Module 8-all
Defines the list_all function to list all documents in a MongoDB collection.
"""


def list_all(mongo_collection):
    """
    Lists all documents in a MongoDB collection.

    Args:
        mongo_collection: pymongo collection object.

    Returns:
        A list of all documents in the collection.
        If no documents are found, returns an empty list.
    """
    if mongo_collection is None:
        return []
    return list(mongo_collection.find())
