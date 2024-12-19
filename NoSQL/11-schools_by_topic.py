#!/usr/bin/env python3

from pymongo.collection import Collection


def schools_by_topic(mongo_collection: Collection, topic: str):
    """Return the list of schools having a specific topic."""
    schools = mongo_collection.find({"topics": topic})
    return [{"_id": str(school.get("_id")), "name": school.get("name"), "topics": school.get("topics", [])} for school in schools]
