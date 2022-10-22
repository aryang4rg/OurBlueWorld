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
// const { createBottomTabNavigator } = require('@react-navigation/bottom-tabs');
const {
  createNativeStackNavigator,
} = require("@react-navigation/native-stack");

function HomeScreen({ navigation }) {
  return (
    <View style={styles.startScreen}>
      <Text style={styles.startText}>GreenTracker</Text>
      <View style={styles.button}>
        <Button
          color="black"
          title="Start Game!"
          onPress={() => navigation.navigate("Login")}
        />
      </View>
    </View>
  );
}

function LoginScreen({ navigation }) {
  console.log("help");
  return (
  <View>
    <View style={styles.button}>
        <Button
          color="black"
          title="Start Game!"
          onPress={() => navigation.navigate("Input")}
        />
      </View>
  </View>
  );
}

function InputScreen({ navigation }) {
  return (
<View>
    <Text>input</Text>
  </View>
  );
}

function LeaderboardScreen({ navigation }) {
  return (
    <View>
        <Text>leader</Text>
      </View>
      );
}

function StatScreen({ navigation }) {
  return (
    <View>
        <Text>stat</Text>
      </View>
      );
}

const Stack = createNativeStackNavigator();
// const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Input" component={InputScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  startScreen: {
    backgroundColor: "#e3bac6",
    justifyContent: "top",
    alignItems: "center",
    flex: 1,
  },
  startText: {
    fontFamily: "Cochin",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 30,
  },
});
