from activities import Activities
class User:
    def __init__(self, username : str, password : str, name : str, groupid : str, company : str,
                token : str, city : str, state : str, email : str, phoneNumber : str, 
                activities : Activities = None):
        self.username = username
        self.password = password
        self.name = name
        self.groupid = groupid
        self.company = company
        self.token = token
        self.city = city
        self.state = state
        self.email = email
        self.phoneNumber = phoneNumber
        if activities == None:
            self.activities = Activities(0, 0, 0, 0, 0, 0).__dict__
        else:
            self.activities = activities.__dict__
    
    @staticmethod
    def dictToUser(dict):
        return User(dict["username"], dict["password"], dict["name"], dict["groupid"], dict["company"], 
            dict["token"], dict["city"], dict["state"], dict["email"], dict["phoneNumber"],
            Activities.dictToActivities(dict["activities"]))
