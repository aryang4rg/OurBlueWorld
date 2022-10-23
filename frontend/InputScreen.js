import Slider from "react-native-sliders";

const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
} = require("react-native");
const {
  NavigationContainer,
  useNavigation,
} = require("@react-navigation/native");

const { DATACONST } = require("./util");

class InputScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null, waterValue: 5 };
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

  render() {
    if (this.state.userData == null) {
      return (
        <View>
          <Text>Loading...</Text>
        </View>
      );
    }

    let personalInfo = this.state.userData;
    let waterValue = this.state.waterValue;

    return (
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
        <View style={styles.whiteContainer}>
          <View style={styles.questionContainer}>
			<View style={alignItems="center"}>
			<Text style={styles.surveyText}>
              How many glasses of water did you drink?
            </Text>
            <Text style={styles.surveyText}>{waterValue}</Text>
			</View>
            <Slider
              minimumValue={0}
              maximumValue={10}
              onValueChange={waterValue => this.setState({ waterValue })}
            />
          </View>
        </View>
      </View>
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
    flex: 1,
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
});
