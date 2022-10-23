import { AnimatedCircularProgress } from "react-native-circular-progress";

const React = require("react");
const {
  StyleSheet,
  View,
  Text,
  Image,
} = require("react-native");
const {
  NavigationContainer,
  useNavigation,
} = require("@react-navigation/native");

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

    let apiData = await fetch(BASEURL+"profile?q="+user);
    apiData = await apiData.json();
    console.log(apiData.activities.wasteScore/apiData.activities.numberOfActivities);
    // let apiData = {
    //   username: "aryangarg",
    //   name: "Rohan Rash",
    //   groupid: "GroupId",
    //   company: "Vanderbilt University",
    //   activities: {
    //     waterScore: 27,
    //     co2Score: 87,
    //     serviceScore: 31,
    //     wasteScore: 74,
    //     impactScore: 80,
    //     numberOfActivities: 63,
    //   },
    //   city: "Cupertino",
    //   state: "CA",
    // };

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
      ["CO2", "https://scx2.b-cdn.net/gfx/news/2018/co2shortagew.jpg"],
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
              style={{
                margin: 3,
                borderRadius: props.size - 80,
                width: props.size - 80,
                height: props.size - 80,
              }}
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
    let numActivities = personalInfo["activities"]["numberOfActivities"];
    if(numActivities == 0) {
      numActivities = 1;
    }
    console.log(parseInt(personalInfo["activities"]))
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
        <Text style={styles.smallText}>{personalInfo["company"]}</Text>
        <Text style={styles.smallText}>
          {personalInfo["city"] + ", " + personalInfo["state"]}
        </Text>
        <View style={{ flexDirection: "row" }}>
          <this.ProgressCircle
            size={140}
            percent={parseInt(personalInfo["activities"]["waterScore"]/numActivities)}
            padding={5}
            color="#00ccff"
            category="Water"
          />
          <this.ProgressCircle
            size={140}
            percent={parseInt(personalInfo["activities"]["co2Score"]/numActivities)}
            padding={5}
            color="black"
            category="CO2"
          />
        </View>
        <this.ProgressCircle
          size={200}
          percent={parseInt(personalInfo["activities"]["impactScore"]/numActivities)}
          padding={0}
          color="green"
          category="Impact Score"
        />
        <View style={{ flexDirection: "row" }}>
          <this.ProgressCircle
            size={140}
            percent={parseInt(personalInfo["activities"]["wasteScore"]/numActivities)}
            padding={10}
            color="#c0c0c0"
            category="Waste"
          />
          <this.ProgressCircle
            size={140}
            percent={parseInt(personalInfo["activities"]["serviceScore"]/numActivities)}
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
    margin: 5,
    borderRadius: 150,
    width: 150,
    height: 150,
  },
});
