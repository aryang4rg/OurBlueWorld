const React = require("react");
const {
	StyleSheet,
	Button,
	View,
	Text,
	Image,
	TextInput,
} = require("react-native");
const { DATACONST } = require("./util");

function LoginScreen({ navigation }) {
	let user = "aryan";

	return (
		<View style={styles.background}>
			<View style={styles.marginContainer}>
				<View style={styles.whiteContainerContainer}>
					<View style={styles.whiteContainer}>
					<Image style={styles.tinyLogo} source={DATACONST.LOGOURL} />
					<Text style={styles.startText}>GreenTracker</Text>
					<LoginForm navigation={navigation} />
					</View>
				</View>
			</View>
		</View>
	);
}

class LoginForm extends React.Component
{
	constructor(props)
	{
		super(props);
	}

	render()
	{
		let navigation = this.props.navigation;
		let user = "aryan";

		return <View>
			<View style={styles.textAndFormContainer}>
				<Text style={styles.formText}>Username</Text>
				<TextInput style={styles.textInput} />
			</View>
			<View style={styles.textAndFormContainer}>
				<Text style={styles.formText}>Password</Text>
				<TextInput style={styles.textInput} />
			</View>
			<View style={styles.button}>
				<Button
					color="black"
					title="Login"
					onPress={() => navigation.navigate("Home", { user })}
				/>
			</View>
			<Text style={styles.centerText}>
				Dont have an account? Create one <a style={styles.anchor}>here</a>
			</Text>

		</View>
	}
}

export { LoginScreen };

const styles = StyleSheet.create({
	anchor: {
		color: "blue"
	},
	centerText: {
		textAlign: "center"
	},
	textAndFormContainer:
	{
		flex: 1,
		flexDirection: "coulmn",
		justifyContent: "space-between",
		width: "100%",
		padding: "5px"
	},
	background: {
		backgroundColor: DATACONST.bkgColorMain,
		width: "100%",
		height: "100%",
	},
	marginContainer: {
		margin: "25px",
	},
	tinyLogo: {
		width: "75%",
		height: "100px",
	},
	whiteContainer: {
		flex: 1,
		alignItems: "center"
	},
	whiteContainerContainer: {
		backgroundColor: DATACONST.bkgColorFour,
		borderRadius: "15px",
		padding: "25px",
		shadowColor: '#171717',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.5,
		shadowRadius: 3,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 8,
		paddingHorizontal: 50,
		borderRadius: "10px",
		elevation: 3,
		margin: 10,
		backgroundColor: "black",
		fontSize: 52,
		shadowColor: '#171717',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	startText: {
		fontFamily: DATACONST.font,
		fontSize: 50,
		color: DATACONST.fontColor2,
		fontWeight: "bold",
		textAlign: "center",
		margin: "5px"
	},
	formText:
	{
		fontFamily: DATACONST.font,
		fontSize: 24,
		color: DATACONST.fontColor,
		fontWeight: "bold",
		marginRight: "30px",
		display: "inline"
	},
	textInput: {
		width: "100%",
		paddingVertical: "6px",
		paddingHorizontal: "12px",
		border: "1px solid #ccc",
		borderRadius: "4px",
		shadowColor: '#171717',
		shadowOffset: {width: -2, height: 4},
		shadowOpacity: 0.05,
		shadowRadius: 3,
	},
	rightMargin: {
		paddingRight: "30px"
	}
});
