import { AnimatedCircularProgress } from "react-native-circular-progress";

const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
} = require("react-native");

const { DATACONST } = require("./util");

class StatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { userData: null };
  }

  componentDidMount() {
    this.getData();
  }

  icons = new Map([
    [
      "Water",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepnglogos.com%2Fpics%2Fdrop&psig=AOvVaw2TvIbN2mwUSgRznFuASJFr&ust=1666579865588000&source=images&cd=vfe&ved=0CAkQjRxqFwoTCMDxzvqr9foCFQAAAAAdAAAAABAM",
    ],
    [
      "Co2",
      "https://upload.wikimedia.org/wikipedia/en/8/8f/Taylor_Swift_-_Speak_Now_cover.png",
    ],
    [
      "Consumption",
      "https://pyxis.nymag.com/v1/imgs/5a1/58c/580de90bf142c7660dcbaf8faa789a61b1-20-taylor-swift-1989.2x.w710.png",
    ],
    [
      "Service",
      "https://people.com/thmb/6cK43NG6zsGRJFZaeriE_TMrV0Y=/1987x2000/filters:fill(auto,1)/taylor-swift7-2000-48f9bfb372c34e36866773b1ede0b372.jpg",
    ],
    [
      "Waste",
      "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png",
    ],
  ]);

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

  ProgressCircle = (props) => {
	const icons = new Map([
		[
		  "Water",
		  "https://www.kindpng.com/picc/m/59-598889_water-drop-free-clipart-with-transparent-background-water.png",
		],
		[
		  "CO2",
		  "https://scx2.b-cdn.net/gfx/news/2018/co2shortagew.jpg",
		],
		[
		  "Service",
		  "https://www.pngitem.com/pimgs/m/245-2453863_philosophy-clipart-handshake-service-clipart-hd-png-download.png",
		],
		[
		  "Waste",
		  "https://us.123rf.com/450wm/olgatik/olgatik2006/olgatik200600008/148327978-garbage-garbage-can-container-with-waste-waste-disposal-vector-illustration-packaging-recycling.jpg?ver=6",
		],
		[
			"Impact Score",
			"https://media.istockphoto.com/vectors/like-sign-with-green-leaves-in-circle-green-thumb-eco-friendly-vector-id1359498219?k=20&m=1359498219&s=612x612&w=0&h=MTyDzwamtedl1s5MsYzZ0AurCKCMNoyBxVgRGEW7Nws=",
		],
	  ]);
    return (
      <AnimatedCircularProgress
        size={props.size}
        width={10}
        fill={props.percent}
        tintColor={props.color}
        backgroundColor="white"
        padding={props.padding}
      >
		
        {(fill) => (
          <>
            <Image
              source={{
                uri: icons.get(props.category),
              }}
              style={{margin: 3,
				borderRadius: props.size-80,
				width: props.size-80,
				height: props.size-80}}
            />
			<Text style={styles.smallText}>{props.category}</Text>
            <Text style={styles.smallText}>{fill + "%"}</Text>
          </>
        )}
      </AnimatedCircularProgress>
    );
  };

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
      <View style={styles.statScreen}>
        <Image
          source={{
            // uri: BASEURL+"profile_picture?q="+personalInfo["username"],
            uri: "https://harkeraquila.com/wp-content/uploads/2022/03/ox_rohanrashingkarhoh_6-893x900.jpeg",
          }}
          style={styles.profilePicture}
        />
        <Text style={styles.nameText}>{personalInfo["name"]}</Text>
		<Text style={styles.smallText}>
          {personalInfo["company"]}
        </Text>
        <Text style={styles.smallText}>
          {personalInfo["city"] + ", " + personalInfo["state"]}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <this.ProgressCircle
		  	size={140}
            percent={personalInfo["activities"]["waterScore"]}
			padding={5}
            color="#00ccff"
            category="Water"
          />
          <this.ProgressCircle
			size={140}
			percent={personalInfo["activities"]["co2Score"]}
			padding={5}
            color="black"
            category="CO2"
          />
        </View>
		<this.ProgressCircle
            size={200}
			percent={personalInfo["activities"]["impactScore"]}
			padding={0}
            color="green"
            category="Impact Score"
          />
		  <View style={{ flexDirection: "row" }}>
          <this.ProgressCircle
		  size={140}
		  percent={personalInfo["activities"]["wasteScore"]}
			padding={10}
            color="#c0c0c0"
            category="Waste"
          />
          <this.ProgressCircle
		  	size={140}
			  percent={personalInfo["activities"]["serviceScore"]}
			padding={10}
            color="#0c1b9a"
            category="Service"
          />
        </View>
      </View>
    );
  }
}

export { StatScreen };

const styles = StyleSheet.create({
  statScreen: {
    backgroundColor: DATACONST.bkgColorSecondary,
    justifyContent: "top",
    flex: 1,
    alignItems: "center",
	paddingTop: 40,
  },
  nameText: {
    fontFamily: DATACONST.font,
    fontSize: 40,
    color: DATACONST.fontColor2,
    fontWeight: "bold",
  },
  smallText: {
    fontFamily: DATACONST.font,
    fontSize: 15,
    color: DATACONST.fontColor2,
	fontWeight: "bold",
  },
  profilePicture: {
    margin: 10,
    borderRadius: 150,
    width: 120,
    height: 120,
  },
});
