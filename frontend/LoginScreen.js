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

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = { type: "login" };
	}

	render() {
		let createFormObj = (nameOfField) => {
			return (
				<View style={styles.textAndFormContainer}>
					<Text style={styles.formText}>{nameOfField}</Text>
					<TextInput id={"formField_"+nameOfField} style={styles.textInput} />
				</View>
			);
		};

		let navigation = this.props.navigation;
		let user = "aryan";

		if (this.state.type == "login") {
			return (
				<View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Username</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Password</Text>
						<TextInput secureTextEntry={true} style={styles.textInput} />
					</View>
					<View style={styles.button}>
						<Button
							color="black"
							title="Login"
							onPress={() => navigation.navigate("Home", { user })}
						/>
					</View>
					<Text style={styles.centerText}>
						Dont have an account? Create one{" "}
						<Text
							style={styles.anchor}
							onClick={() => {
								this.setState({ type: "signup" });
							}}>
							here
						</Text>
					</Text>
				</View>
			);
		} else {
			return (
				<View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Email Address</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Full Name</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Username</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Password</Text>
						<TextInput secureTextEntry={true} style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Phone Number</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>Invite Code</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>City</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.textAndFormContainer}>
						<Text style={styles.formText}>State</Text>
						<TextInput style={styles.textInput} />
					</View>
					<View style={styles.button}>
						<Button
							color="black"
							title="Signup"
							onPress={() => navigation.navigate("Home", { user })}
						/>
					</View>
					<Text style={styles.centerText}>
						Already have an account? Login{" "}
						<a
							style={styles.anchor}
							onClick={() => {
								this.setState({ type: "login" });
							}}>
							here
						</a>
					</Text>
				</View>
			);
		}
	}
}

export { LoginScreen };

const styles = StyleSheet.create({
	anchor: {
		color: "blue",
	},
	centerText: {
		textAlign: "center",
	},
	textAndFormContainer: {
		flex: 1,
		flexDirection: "coulmn",
		justifyContent: "space-between",
		width: "100%",
		padding: 5,
	},
	background: {
		backgroundColor: DATACONST.bkgColorMain,
		width: "100%",
		height: "120%",
	},
	marginContainer: {
		margin: 25,
	},
	tinyLogo: {
		width: "75%",
		height: 100,
	},
	whiteContainer: {
		flex: 1,
		alignItems: "center",
	},
	whiteContainerContainer: {
		backgroundColor: DATACONST.bkgColorFour,
		borderRadius: 15,
		padding: 25,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.5,
		shadowRadius: 3,
	},
	button: {
		alignItems: "center",
		justifyContent: "center",
		paddingVertical: 8,
		paddingHorizontal: 50,
		borderRadius: 10,
		elevation: 3,
		margin: 10,
		backgroundColor: "black",
		fontSize: 52,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
	},
	startText: {
		fontFamily: DATACONST.font,
		fontSize: 50,
		color: DATACONST.fontColor2,
		fontWeight: "bold",
		textAlign: "center",
		margin: 5,
	},
	formText: {
		fontFamily: DATACONST.font,
		fontSize: 24,
		color: DATACONST.fontColor,
		fontWeight: "bold",
		marginRight: 30,
		display: "inline",
	},
	textInput: {
		width: "100%",
		paddingVertical: 6,
		paddingHorizontal: 12,
		border: "1px solid #ccc",
		borderRadius: 4,
		shadowColor: "#171717",
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.05,
		shadowRadius: 3,
		fontFamily: DATACONST.font,
	},
	rightMargin: {
		paddingRight: 30,
	},
});
