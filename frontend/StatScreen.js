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

function getData(user) {
	
}

function StatScreen(props) {
	let {user} = props;

	userData = getData(user);

	return (
		<View>
			<Text>{user}</Text>
		</View>
	);
}

export {StatScreen};