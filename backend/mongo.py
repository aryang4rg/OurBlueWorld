import pymongo
from user import User

class Mongo:
    def __init__(self):
        self.myclient = pymongo.MongoClient("mongodb://localhost:27017/")
        self.mydb = self.myclient["mydatabase2"]
        self.mycol = self.mydb["users"]

    def find(self, user : User) -> User:
        dict = self.mycol.find_one({"username" : user.username})
        if dict == None:
            return None
        return User.dictToUser(self.mycol.find_one({"username" : user.username}))

    def insert(self, user : User) -> User:
        if self.find(user) != None:
            raise Exception("Attempted to insert a user that already exists")
        self.mycol.insert_one(user.__dict__)
        return user
    
    def update(self, user : User) -> User:
        if self.find(user) == None:
            raise Exception("Attempted to update a user that does not exist")
        self.mycol.update_one({"username" : user.username}, {"$set" : user.__dict__})
        return user