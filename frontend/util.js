const React = require("react");

export const DATACONST = {
	BASEURL: "http://localhost:3000/",
	LOGOURL: "https://www.pngkey.com/png/detail/99-992640_ocean-logo.png",
<<<<<<< HEAD
	font: "Helvetica",
	fontColor: "#7fcdff",
	fontColor2: "#045e8f",
	bkgColorMain: "#064273",
	bkgColorSecondary: "#def3f6",
	bkgColorThree: "#76b6c4",
=======
    font: "Helvetica",
    fontColor: "#7fcdff",
    fontColor2: "#045e8f",
    bkgColorMain: "#064273",
    bkgColorSecondary: "#def3f6",
    bkgColorThree: "#76b6c4",
>>>>>>> f15a225469719532bb2b0472a97ab920d796a18b
	bkgColorFour: "#fff1d0",
};

export const validateEmail = (email) => {
	return String(email)
		.toLowerCase()
		.match(
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		);
};

export function formatPhoneNumber(phoneNumberString) {
	var cleaned = ("" + phoneNumberString).replace(/\D/g, "");
	var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
	if (match) {
		var intlCode = match[1] ? "+1 " : "";
		return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
	}
	return null;
}
