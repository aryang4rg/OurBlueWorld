const React = require("react");
const {
	StyleSheet,
	Button,
	View,
	Text,
	Image,
	TextInput,
} = require("react-native");

function LoginScreen({ navigation }) {
	let user = "aryan";

	return (
		<View>
			<View style={styles.button}>
				<Button
					color="black"
					title="Start Game!"
					onPress={() => navigation.navigate("Home", { user })}
				/>
			</View>
		</View>
	);
}

export { LoginScreen };

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 8,
		paddingHorizontal: 50,
		borderRadius: 40,
		elevation: 3,
		margin: 10,
		backgroundColor: "black",
	},
});