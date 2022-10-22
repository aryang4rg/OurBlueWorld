const React = require("react");
const {
	StyleSheet,
	Button,
	View,
	Text,
	Image,
	TextInput,
} = require("react-native");

function LeaderboardScreen(props) {
	let {user} = props;

	return (
		<View>
			<Text>{user}</Text>
		</View>
	);
}

export {LeaderboardScreen};