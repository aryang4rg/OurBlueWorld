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
const {
	createNativeStackNavigator,
} = require("@react-navigation/native-stack");

const {styles} = require("./styles");

const {StartScreen} = require("./StartScreen");
const {LoginScreen} = require("./LoginScreen.js");
const {HomeScreen} = require("./HomeScreen");

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen name="Start" component={StartScreen} options={{ headerShown: false }}/>
         <Stack.Screen name="Login" component={LoginScreen}/>
         <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
       </Stack.Navigator>
     </NavigationContainer>
  );
}

export default App;

