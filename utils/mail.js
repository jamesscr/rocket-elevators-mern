import nodemailer from 'nodemailer';

export const generateOTP = (otp_length = 6) => {
	let OTP = '';
	for (let i = 1; i <= otp_length; i++) {
		const randomVal = Math.round(Math.random() * 9);
		OTP += randomVal;
	}

	return OTP;
};

const {EMAIL, PASSWORD} = process.env;

export const generateMailTransporter = () =>
	nodemailer.createTransport({
		service: 'gmail',
		port: 465,
		secure: true,
		auth: {
			user: EMAIL,
			pass: PASSWORD,
		},
	});
