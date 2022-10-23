const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
} = require("react-native");

const {DATACONST} = require("./util.js");

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
		backgroundColor: DATACONST.bkgColorMain,
		justifyContent: "top",
		alignItems: "center",
		flex: 1,
	},
	startText: {
		fontFamily: DATACONST.font,
		fontSize: 50,
    color: DATACONST.fontColor,
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 80,
	},
});