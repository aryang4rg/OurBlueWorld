const React = require("react");
const {
	StyleSheet,
	Button,
	View,
	Text,
	Image,
	TextInput,
} = require("react-native");
const { DATACONST, validateEmail, formatPhoneNumber } = require("./util");

let sampleResp = {
	status: "success",
	user: {
		username: "aryangarg",
		password: "anfjkhBHfMyHashedPasswordajshdhfln",
		name: "Aryan",
		groupid: "GroupId",
		company: "Vanderbilt University",
		activities: {
			waterScore: 274,
			co2Score: 23487,
			serviceScore: 231,
			wasteScore: 2374,
			impactScore: 23810,
			numberOfActivities: 63,
		},
		token: "asldfasMytokenamasdf",
		city: "cupertino",
		state: "California",
		email: "asdf",
		phoneNumber: "239-234-5832",
	},
};

function LoginScreen({ navigation }) {
	let user = "aryan";

	return (
		<View style={styles.background}>
			<View style={styles.marginContainer}>
				<View style={styles.whiteContainerContainer}>
					<View style={styles.whiteContainer}>
						<Image style={styles.tinyLogo} source={DATACONST.LOGOURL} />
						<Text style={styles.startText}>OurBlueWorld</Text>
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
		this.formVars = {};
	}

	async login(username, password) {
		let fetchResp = await fetch(DATACONST.BASEURL + "/login", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ username, password }),
		});

		if (!fetchResp.ok) {
			console.error("Error logging in: " + JSON.stringify(fetchResp));
			alert("Login Failed");
			return;
		}

		let resp = await fetchResp.json();
		// let resp = sampleResp;
		window.localStorage.setItem("token", resp.user.token);
		this.props.navigation.navigate("Home", {
			user: username,
			token: resp.user.token,
		});
	}

	async signup(
		emailAddress,
		fullName,
		username,
		password,
		phoneNumber,
		inviteCode,
		city,
		state
	) {
		let bodyObj = {
			email: emailAddress,
			name: fullName,
			username: username,
			password: password,
			phoneNumber: phoneNumber,
			groupid: inviteCode,
			city: city,
			state: state,
		};

		let fetchResp = await fetch(DATACONST.BASEURL + "signup", {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(bodyObj),
		});

		if (!fetchResp.ok) {
			console.error("Error signing up: " + JSON.stringify(fetchResp));
			alert("Signup Failed");
			return;
		}

		let resp = await fetchResp.json();
		// let resp = sampleResp;
		window.localStorage.setItem("token", resp.user.token);
		this.props.navigation.navigate("Home", {
			user: username,
			userData: resp.user,
		});
	}

	handleButtonPress() {
		if (this.state.type == "login") {
			let username = this.formVars.Username.current.value;
			let password = this.formVars.Password.current.value;

			if (username.length == 0 || password.length == 0) {
				alert("Please fill out all fields");
				return;
			}

			// this.props.navigation.navigate("Home", { user: username });
			this.login(username, password);
		} else {
			let emailAddress = this.formVars["Email Address"].current.value;
			let fullName = this.formVars["Full Name"].current.value;
			let username = this.formVars.Username.current.value;
			let password = this.formVars.Password.current.value;
			let phoneNumber = this.formVars["Phone Number"].current.value;
			let inviteCode = this.formVars["Invite Code"].current.value;
			let city = this.formVars.City.current.value;
			let state = this.formVars.State.current.value;

			if (
				emailAddress.length == 0 ||
				fullName.length == 0 ||
				username.length == 0 ||
				password.length == 0 ||
				phoneNumber.length == 0 ||
				inviteCode.length == 0 ||
				city.length == 0 ||
				state.length == 0
			) {
				alert("Please fill out all fields");
				return;
			}

			if (validateEmail(emailAddress) == null) {
				alert("Please enter a valid email address");
				return;
			}

			let phoneNumFormatted = formatPhoneNumber(phoneNumber);
			if (phoneNumFormatted == null) {
				alert("Please enter a valid phone number");
				return;
			}

			if (phoneNumFormatted[0] != "+") {
				phoneNumFormatted = "+1 " + phoneNumFormatted;
			}

			this.signup(emailAddress, fullName, username, password, phoneNumFormatted, inviteCode, city, state);
			// this.props.navigation.navigate("Home", { username });
		}
	}

	render() {
		let createFormObj = (nameOfField, password = false) => {
			this.formVars[nameOfField] = React.createRef();
			let currTextInput = (
				<TextInput
					ref={this.formVars[nameOfField]}
					secureTextEntry={password}
					style={styles.textInput}
				/>
			);

			return (
				<View style={styles.textAndFormContainer}>
					<Text style={styles.formText}>{nameOfField}</Text>
					{currTextInput}
				</View>
			);
		};

		if (this.state.type == "login") {
			return (
				<View>
					{createFormObj("Username")}
					{createFormObj("Password", true)}
					<View style={styles.button}>
						<Button
							color="black"
							title="Login"
							onPress={this.handleButtonPress.bind(this)}
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
					{createFormObj("Email Address")}
					{createFormObj("Full Name")}
					{createFormObj("Username")}
					{createFormObj("Password", true)}
					{createFormObj("Phone Number")}
					{createFormObj("Invite Code")}
					{createFormObj("City")}
					{createFormObj("State")}
					<View style={styles.button}>
						<Button
							color="black"
							title="Signup"
							onPress={this.handleButtonPress.bind(this)}
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
		width: 100,
		height: 100,
		borderRadius: 100,
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
