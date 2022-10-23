const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
} = require("react-native");

const { styles } = require("./styles");
const { DATACONST } = require("./util");

class StatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null };
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
		"username" : "aryangarg",
		"name" : "Aryan",
		"groupid" : "GroupId", 
		"company" : "Vanderbilt University",
		"activities" : {
			"waterScore" : 274, 
			"co2Score" : 23487,
			"consumptionScore" : 1234,
			"serviceScore" : 231, 
			"wasteScore" : 2374,
			"impactScore" : 23810,
			"numberOfActivities" : 63
		}, 
		"city" : "cupertino",
		"state" : "California",
	};
	
	this.setState({
		userData : apiData
	});
  }

  render() {
    if (this.state.userData == null) {
      return <View><Text>Loading...</Text></View>;
    }

	let personalInfo = this.state.userData;

    return (
      <View style={styles.statScreen}>
		<Image
        source={{
			// uri: BASEURL+"profile_picture?q="+personalInfo["username"],
          uri: "https://harkeraquila.com/wp-content/uploads/2022/03/ox_rohanrashingkarhoh_6-893x900.jpeg",
		}}
        style={styles.profilePicture}
      	/>
        <Text style={styles.statText}>
			{personalInfo["name"]}
		</Text>
      </View>
    );
  }
}

export { StatScreen };
