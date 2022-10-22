const React = require("react");
const {
	StyleSheet,
	Button,
	View,
	Text,
	Image,
	TextInput,
} = require("react-native");

function StatScreen(props) {
	let {user} = props;

	return (
		<View>
			<Text>{user}</Text>
		</View>
	);
}

export {StatScreen};