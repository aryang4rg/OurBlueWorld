const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
} = require("react-native");

const { styles } = require("./styles");

function StartScreen({navigation}) {
//   let navigation = props.navigation;

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
