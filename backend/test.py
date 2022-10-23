from user import User
from activities import Activities
import mongo

activities1 = Activities(274, 23487, 1234, 231, 2374, 23810, 63)
activities2 = Activities(1, 2, 3, 4, 5, 6, 7)

test1 = User("slayeroftheend", "123", "Aryan", "234752", "Vandy", "Test Token", "Cupertino", "CA", "aryansmail", "123-456-7890", activities1, "1")
test2 = User("allanzhang", "354", "Allan", "347598", "Nashville", "Test Token 2", "Ridge", "NJ", "allansmail", "999-999-9999", activities2)
test3 = User("evelyn", "651", "Evelyn", "876971", "Vanderbilt", "Test Token 3", "Beachwood", "OH", "evelynsmail", "123-543-7890", None, "2")
test4 = User("robot", "742", "Rohan", "998702", "Vanderbilt U", "Token4", "Sunnyvale", "CA", "rohansmail", "324-456-7890", None, "3")
test5 = User("robot", "555", "Rashingkar", "8796", "Updated U", "Token5", "Sunnyvale", "CA", "rohansmail2", "554-456-6456")

# x = json.dumps(test.__dict__)
# print("\n" + x + "\n")
# print(test.__dict__)

mongodb = mongo.Mongo()
print(mongodb.myclient.list_database_names())
print("\n")

# print (isinstance(test1.activities, str))

mongodb.insert(test1)
mongodb.insert(test2)
mongodb.insert(test3)
# print(mongodb.update(test4))
# print(isinstance(mongodb.update(test4), User))

# print(mongodb.update(test4)) # throws an error
print("\n")
print("\n")

# print(mongodb.find(test4))
# print("\n")

# print(mongodb.mydb.getUsers)