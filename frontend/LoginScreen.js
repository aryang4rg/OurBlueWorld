const React = require("react");
const {
	StyleSheet,
	Button,
	View,
	Text,
	Image,
	TextInput,
} = require("react-native");

const {styles} = require("./styles");

function LoginScreen({ navigation }) {
	
	return (
		<View>
			<View style={styles.button}>
				<Button
					color="black"
					title="Start Game!"
					onPress={() => navigation.navigate("Home")}
				/>
			</View>
		</View>
	);
}

export { LoginScreen };