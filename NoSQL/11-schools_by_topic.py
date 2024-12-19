#!/usr/bin/env python3

from pymongo.collection import Collection


def schools_by_topic(mongo_collection: Collection, topic: str):
    """Return the list of schools having a specific topic."""
    # Ensure uniqueness by filtering duplicates
    schools = mongo_collection.find({"topics": topic})
    unique_schools = {school.get("_id"): school for school in schools}
    return [
        {"_id": str(school_id), "name": school.get("name"),
         "topics": school.get("topics", [])}
        for school_id, school in unique_schools.items()
    ]
