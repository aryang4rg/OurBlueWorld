const React = require("react");
const {
  StyleSheet,
  Button,
  View,
  Text,
  Image,
  TextInput,
} = require("react-native");

const styles = StyleSheet.create({
	startScreen: {
		backgroundColor: "#064273",
		justifyContent: "top",
		alignItems: "center",
		flex: 1,
	},
	startText: {
		fontFamily: "Roboto",
		fontSize: 50,
        color: "#7fcdff",
		fontWeight: "bold",
		textAlign: "center",
		paddingVertical: 80,
	},
    statScreen: {
		backgroundColor: "#064273",
		justifyContent: "top",
		flex: 1,
	},
    statText: {
        fontFamily: "Roboto",
		fontSize: 50,
        color: "#7fcdff",
		fontWeight: "bold",
		paddingVertical: 40,
    },
    profilePicture: {
        margin: 30,
        borderRadius: 150,
        width: 150, 
        height: 150,
    }
});

export {styles};