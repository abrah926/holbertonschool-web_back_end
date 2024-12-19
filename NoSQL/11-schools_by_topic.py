#!/usr/bin/env python3

from pymongo.collection import Collection
from typing import List


def schools_by_topic(mongo_collection: Collection, topic: str) -> List[dict]:
    """Return the list of schools having a specific topic."""
    return list(mongo_collection.find({"topics": topic}))
