import { ScrollView } from "react-native-gesture-handler";
import Slider from "react-native-sliders";

const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
} = require("react-native");
const {
  NavigationContainer,
  useNavigation,
} = require("@react-navigation/native");

const { DATACONST } = require("./util");

// props.question = "question"
// max = num
// min = num
// onValueChange
class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showerValue: this.props.min };
  }

  render() {
    let showerValue = this.state.showerValue;

    return (
      <View style={styles.whiteContainer}>
        <View style={styles.questionContainer}>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.surveyText}>{this.props.question}</Text>
            <Text style={styles.surveyText}>{parseInt(showerValue)}</Text>
          </View>
          <Slider
            minimumValue={this.props.min}
            maximumValue={this.props.max}
            onValueChange={(showerValue) => {
              this.setState({ showerValue });
              this.props.onValueChange(showerValue);
            }}
          />
        </View>
      </View>
    );
  }
}

class InputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: null,
    };
	this.showerValue = 0;
	this.bathroomValue = 0;
	this.gasValue = 0;
	this.acValue = 0;
	this.plasticValue = 0;
	this.recycleValue = 0;
	this.volunteerValue = 0;
	this.pickValue = 0;
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    let { BASEURL } = DATACONST;

    let user = this.props.user;

    // let apiData = await fetch(BASEURL+"?q="+user);
    // apiData = await apiData.json();

    let apiData = {
      username: "aryangarg",
      name: "Rohan Rash",
      groupid: "GroupId",
      company: "Vanderbilt University",
      activities: {
        waterScore: 27,
        co2Score: 87,
        serviceScore: 31,
        wasteScore: 74,
        impactScore: 80,
        numberOfActivities: 63,
      },
      city: "Cupertino",
      state: "CA",
    };

    this.setState({
      userData: apiData,
    });
  }

  submitAnswers = () => {
	let waterScore = 5*(10-this.showerValue)+10*(5-this.bathroomValue);
	let CO2Score = 0.5*(100-this.gasValue)+(50/24)*(24-this.acValue);
	let plasticScore = 5*(10-this.plasticValue)+5*(this.recycleValue-10);
	let volunteerScore = 5*(this.volunteerValue-10)+5*(this.pickValue-10);
	let impactScore = (waterScore+CO2Score+plasticScore+volunteerScore)/4;

	let token = this.props.token;

	let surveyResults = {
		"token" : token, 
		"activity" : {
		  "waterScore" : waterScore, 
		  "co2Score" : CO2Score,
		  "serviceScore" : volunteerScore, 
		  "wasteScore" : plasticScore,
		  "impactScore" : impactScore,
		}
	  };

	// console.log(token);

	// let fetchResp = await fetch(DATACONST.BASEURL + "/surveys", {
	// 		method: "POST",
	// 		body: JSON.stringify(surveyResults),
	// 	});

	// 	if (!fetchResp.ok) {
	// 		console.error("Error logging in: " + JSON.stringify(fetchResp));
	// 		alert("Survey Failed");
	// 		return;
	// 	}

	// 	let resp = await fetchResp.json();
	// console.log(resp);

	this.showerValue = 0;
	this.bathroomValue = 0;
	this.gasValue = 0;
	this.acValue = 0;
	this.plasticValue = 0;
	this.recycleValue = 0;
	this.volunteerValue = 0;
	this.pickValue = 0;
  }

  render() {
    if (this.state.userData == null) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    let personalInfo = this.state.userData;

	return (
		<ScrollView>
      <View style={styles.inputScreen}>
        <View style={styles.whiteContainerContainer}>
          <Text style={styles.headingText}>
            {personalInfo["company"] + "'s Daily Survey"}
          </Text>
          <Image
            source={{
              // uri: BASEURL+"profile_picture?q="+personalInfo["username"],
              uri: "https://media.istockphoto.com/vectors/checklist-icon-vector-design-vector-id1327963048?k=20&m=1327963048&s=612x612&w=0&h=Kwki80wTh0CgHgptCSor5Nz6l3GGPrTMDInJ7CnQ3GU=",
            }}
            style={styles.surveyPicture}
          />
        </View>
		<Question
          question="How many hours did you shower today?"
          min={0}
		  max={10}
		  onValueChange={(newShowerValue) => {this.showerValue = newShowerValue}}
        />
        <Question
          question="How many times did you go to the bathroom?"
          min={0}
		  max={5}
		  onValueChange={(newBathroomValue) => {this.bathroomValue = newBathroomValue}}
        />
		<Question
          question="How many miles did you travel in a gasoline car today?"
          min={0}
		  max={100}
		  onValueChange={(newGasValue) => {this.gasValue = newGasValue}}
        />
		<Question
          question="How many hours was your heater/ac on?"
          min={0}
		  max={24}
		  onValueChange={(newACValue) => {this.acValue = newACValue}}
        />
		<Question
          question="How many pounds of plastic material did you use today?"
          min={0}
		  max={10}
		  onValueChange={(newPlasticValue) => {this.plasticValue = newPlasticValue}}
        />
		<Question
          question="How many pounds did you recycle?"
          min={0}
		  max={10}
		  onValueChange={(newRecycleValue) => {this.recycleValue = newRecycleValue}}
        />
		<Question
          question="How many hours did you volunteer?"
          min={0}
		  max={10}
		  onValueChange={(newVolunteerValue) => {this.volunteerValue = newVolunteerValue}}
        />
		<Question
          question="How many pounds of trash did you pick up?"
          min={0}
		  max={10}
		  onValueChange={(newPickValue) => {this.pickValue = newPickValue}}
        />
		<View style={styles.button}>
        <Button
          color="black"
          title="Submit"
          onPress={this.submitAnswers}
        />
      </View>
      </View>
	  </ScrollView>
    );
  }
}

export { InputScreen };

const styles = StyleSheet.create({
  inputScreen: {
    backgroundColor: DATACONST.bkgColorSecondary,
    justifyContent: "top",
    flex: 1,
    alignItems: "center",
    paddingTop: 10,
  },
  headingText: {
    fontFamily: DATACONST.font,
    fontSize: 30,
    color: DATACONST.fontColor2,
    margin: 10,
    fontWeight: "bold",
  },
  surveyText: {
    fontFamily: DATACONST.font,
    fontSize: 15,
    color: DATACONST.fontColor2,
    fontWeight: "bold",
  },
  surveyPicture: {
    margin: 10,
    borderRadius: 150,
    width: 120,
    height: 120,
  },
  whiteContainer: {
    padding: 10,
    alignItems: "center",
  },
  whiteContainerContainer: {
    flexDirection: "row",
    backgroundColor: DATACONST.bkgColorFour,
    borderRadius: 30,
    padding: 25,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  questionContainer: {
    backgroundColor: DATACONST.bkgColorFour,
    borderRadius: 30,
    padding: 15,
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
	color: "black",
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 40,
    elevation: 3,
    margin: 10,
    backgroundColor: "black",
  },
});
