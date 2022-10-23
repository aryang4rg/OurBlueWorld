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
} = require("@react-navigation/native");
const  { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

const {InputScreen} = require("./InputScreen.js");
const {LeaderboardScreen} = require("./LeaderboardScreen.js");
const {StatScreen} = require("./StatScreen.js");

function HomeScreen(props) {
  let route = props.route;
  let {user, token} = route.params;

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Input" children={()=><InputScreen user={user} navigation={props.navigation} token={token}/>} options={{ headerShown: false }}/>
      <Tab.Screen name="Leaderboard" children={()=><LeaderboardScreen user={user} navigation={props.navigation}/>} options={{ headerShown: false }}/>
      <Tab.Screen name="Stats" children={()=><StatScreen user={user} navigation={props.navigation}/>} options={{ headerShown: false }}/>
     </Tab.Navigator>
  );
}

export { HomeScreen };