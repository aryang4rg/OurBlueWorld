class Activities:
    def __init__(self, waterScore, co2Score, serviceScore, wasteScore, impactScore, numberOfActivities):
        self.waterScore = waterScore
        self.co2Score = co2Score
        self.serviceScore = serviceScore
        self.wasteScore = wasteScore
        self.impactScore = impactScore
        self.numberOfActivities = numberOfActivities

    @staticmethod
    def dictToActivities(dict):
        return Activities(dict["waterScore"], dict["co2Score"], dict["serviceScore"], dict["wasteScore"],
                          dict["impactScore"], dict["numberOfActivities"])