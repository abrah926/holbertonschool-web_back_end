#!/usr/bin/env python3
""" 9-insert_school """


def insert_school(mongo_collection, **kwargs):
    """Inserts a new document in a collection based on kwargs"""
    new_school = mongo_collection.insert_one(kwargs)
    return new_school.inserted_id
