const React = require("react");
const {
	StyleSheet,
	Button,
	View,
	Text,
	Image,
	TextInput,
} = require("react-native");

const  { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');

const {InputScreen} = require("./InputScreen.js");
const {LeaderboardScreen} = require("./LeaderboardScreen.js");
const {StatScreen} = require("./StatScreen.js");

function HomeScreen(props) {
  let route = props.route;
  let {user} = route.params;

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name="Input" children={()=><InputScreen user={user}/>}/>
      <Tab.Screen name="Leaderboard" children={()=><LeaderboardScreen user={user}/>}/>
      <Tab.Screen name="Stats" children={()=><StatScreen user={user}/>} options={{ headerShown: false }}/>
     </Tab.Navigator>
  );
}

export { HomeScreen };