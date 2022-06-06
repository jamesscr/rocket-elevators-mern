import nodemailer from 'nodemailer';

export const generateOTP = (otp_length = 6) => {
	let OTP = '';
	for (let i = 1; i <= otp_length; i++) {
		const randomVal = Math.round(Math.random() * 9);
		OTP += randomVal;
	}

	return OTP;
};
const {EMAIL, MAILING_ID, MAILING_SECRET, MAILING_REFRESH} = process.env;

const {MAIL_TRAP_USER, MAIL_TRAP_PASS} = process.env;

export const generateMailTransporter = () =>
	nodemailer.createTransport({
		service: 'Gmail',
		host: 'smtp.gmail.com',
		port: 2525,
		secure: true,
		auth: {
			type: 'OAuth2',
			user: EMAIL,
			clientId: MAILING_ID,
			clientSecret: MAILING_SECRET,
			refreshToken: MAILING_REFRESH,
		},
	});

// export const generateMailTransporter = () =>
// 	nodemailer.createTransport({
// 		host: 'smtp.mailtrap.io',
// 		port: 2525,
// 		auth: {
// 			user: '7a14c5f060aaac',
// 			pass: '6633d01c56fb57',
// 		},
// 	});
