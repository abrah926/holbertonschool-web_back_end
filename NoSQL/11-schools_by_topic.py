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


if __name__ == "__main__":
    client = MongoClient('mongodb://127.0.0.1:27017')
    school_collection = client.my_db.school

    j_schools = [
        {'name': "Holberton school", 'topics': [
            "Algo", "C", "Python", "React"]},
        {'name': "UCSF", 'topics': ["Algo", "MongoDB"]},
        {'name': "UCLA", 'topics': ["C", "Python"]},
        {'name': "UCSD", 'topics': ["Cassandra"]},
        {'name': "Stanford", 'topics': ["C", "React", "Javascript"]}
    ]
    for j_school in j_schools:
        insert_school(school_collection, **j_school)

    schools = schools_by_topic(school_collection, "Python")
    for school in schools:
        print("[{}] {} {}".format(school.get('_id'),
              school.get('name'), school.get('topics', "")))
