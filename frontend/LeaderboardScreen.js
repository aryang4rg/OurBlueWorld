import { DATACONST } from "./util";

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

/*
props.data = {
      "username" : "aryangargFirst",
      "name" : "Aryan",
      "groupid" : "GroupId",
      "company" : "Vanderbilt University",
      "activities" : {
        "waterScore" : 274,
        "co2Score" : 23487,
        "serviceScore" : 231,
        "wasteScore" : 2374,
        "impactScore" : 23810,
        "numberOfActivities" : 63
      },
      "city" : "cupertino",
      "state" : "California",
    }
*/
function LeaderboardPerson(props) {
	return (
		<View style={styles.profileContainer}>
			<Image style={styles.profilePicture} source={DATACONST.LOGOURL} />
			<View style={styles.profileTextContainer}>
				<Text>{props.data.name}</Text>
				<Text>{props.data.activities.impactScore}</Text>
			</View>
		</View>
	);
}

class LeaderboardScreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: null,
		};
	}

	componentDidMount() {
		let someData = {
			username: "aryangargFirst",
			name: "Aryan",
			groupid: "GroupId",
			company: "Vanderbilt University",
			activities: {
				waterScore: 274,
				co2Score: 23487,
				serviceScore: 231,
				wasteScore: 2374,
				impactScore: 23810,
				numberOfActivities: 63,
			},
			city: "cupertino",
			state: "California",
		};
		this.setState({ data: someData });
	}

	render() {
		let { user } = this.props;

		if (this.state.data == null) {
			return (
				<View>
					<Text>{user}</Text>
				</View>
			);
		}

		return (
			<View style={styles.mainContainer}>
				{/* <View style={styles.secondaryContainer}> */}
					<LeaderboardPerson data={this.state.data} />
					<LeaderboardPerson data={this.state.data} />
				{/* </View> */}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	mainContainer: {
		backgroundColor: DATACONST.bkgColorSecondary,
		height: "100%",
		width: "100%",
		padding: 15,

	},
	secondaryContainer: {
		borderRadius: "35%",
		height: "100%",
		width: "100%",
		backgroundColor: DATACONST.bkgColorFour,
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	profileContainer: {
		backgroundColor: DATACONST.bkgColorFour,
		flexDirection: "row",
		height: 90
	},
	profileTextContainer: {
		flex: 1,
		flexDirection: "column",
	},
	profilePicture: {
		margin: 10,
		borderRadius: 150,
		width: 90,
		height: 90
	},
});

export { LeaderboardScreen };

/*
{
  "rankingList" : [
    {
      "username" : "aryangargFirst",
      "name" : "Aryan",
      "groupid" : "GroupId",
      "company" : "Vanderbilt University",
      "activities" : {
        "waterScore" : 274,
        "co2Score" : 23487,
        "serviceScore" : 231,
        "wasteScore" : 2374,
        "impactScore" : 23810,
        "numberOfActivities" : 63
      },
      "city" : "cupertino",
      "state" : "California",
    },
    {
      "username" : "aryangargSecond",
      "name" : "Aryan",
      "groupid" : "GroupId",
      "company" : "Vanderbilt University",
      "activities" : {
        "waterScore" : 274,
        "co2Score" : 23487,
        "serviceScore" : 231,
        "wasteScore" : 2374,
        "impactScore" : 23810,
        "numberOfActivities" : 63
      },
      "city" : "cupertino",
      "state" : "California",
    },
    {
      "username" : "aryangargThird",
      "name" : "Aryan",
      "groupid" : "GroupId",
      "company" : "Vanderbilt University",
      "activities" : {
        "waterScore" : 274,
        "co2Score" : 23487,
        "serviceScore" : 231,
        "wasteScore" : 2374,
        "impactScore" : 23810,
        "numberOfActivities" : 63
      },
      "city" : "cupertino",
      "state" : "California",
    }
  ]
}
*/
