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
const { createBottomTabNavigator } = require("@react-navigation/bottom-tabs");

function InputScreen({ navigation }) {
	return (
		<View>
			<Text>input</Text>
		</View>
	);
}

export {InputScreen};