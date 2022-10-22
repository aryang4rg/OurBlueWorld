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


function HomeScreen() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
       <Tab.Screen name="Input" component={InputScreen} />
       <Tab.Screen name="Leaderboard" component={LeaderboardScreen} />
       <Tab.Screen name="Stats" component={StatScreen} />
     </Tab.Navigator>
  );
}

export { HomeScreen };