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
			<Text></Text>
			<Image style={styles.profilePicture} source={DATACONST.LOGOURL} />
			<View style={styles.profileTextContainer}>
				<Text style={styles.surveyText}>{props.data.name}</Text>
				<Text style={styles.surveyText}>{"Impact Score: " + props.data.activities.impactScore}</Text>
				<Text style={styles.surveyText}>{"Days Participated: " + props.data.activities.numberOfActivities}</Text>
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
			<View style={styles.leadershipScreen}>
				<View style={styles.whiteContainerContainer}>
					<Image
						source={{
							// uri: BASEURL+"profile_picture?q="+personalInfo["username"],
							uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Vanderbilt_Commodores_logo.svg/1051px-Vanderbilt_Commodores_logo.svg.png",
						}}
						style={styles.surveyPicture}
					/>
					<Text style={styles.headingText}>Vanderbilt's Leaderboard</Text>
				</View>
				<View style={styles.mainContainer}>
					{/* <View style={styles.secondaryContainer}> */}
					<LeaderboardPerson data={this.state.data} />
					<LeaderboardPerson data={this.state.data} />
					{/* </View> */}
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	leadershipScreen: {
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
	surveyPicture: {
		margin: 10,
		borderRadius: 80,
		width: 80,
		height: 80,
	},
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
		borderRadius: 20,
		margin: 5,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
	},
	profileTextContainer: {
		flex: 1,
		flexDirection: "column",
	},
	profilePicture: {
		margin: 10,
		borderRadius: 150,
		width: 90,
		height: 90,
	},
	surveyText: {
		fontFamily: DATACONST.font,
		fontSize: 20,
		color: DATACONST.fontColor2,
		fontWeight: "bold",
		margin: 6,
	  },
	whiteContainerContainer: {
		flexDirection: "row",
		backgroundColor: DATACONST.bkgColorFour,
		borderRadius: 30,
		padding: 15,
		paddingHorizontal: 5,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 5,
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
