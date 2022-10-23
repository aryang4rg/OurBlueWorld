const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
} = require("react-native");

function StartScreen({navigation}) {
  return (
      <View style={styles.startScreen}>
        <Text style={styles.startText}>GreenTracker</Text>
        <View style={styles.button}>
          <Button
            color="black"
            title="Start Game!"
            onPress={() => {
				navigation.navigate("Login")
			}}
          />
        </View>
      </View>
  );
}

export { StartScreen };

const styles = StyleSheet.create({
	startScreen: {
		backgroundColor: "#064273",
		justifyContent: "top",
		alignItems: "center",
		flex: 1,
	},
	startText: {
		fontFamily: "Helvetica",
		fontSize: 50,
        color: "#7fcdff",
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 80,
	},
});