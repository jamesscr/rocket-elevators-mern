import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import EmailVerificationToken from '../models/EmailVerificationToken.js';
import PasswordResetToken from '../models/PasswordResetToken.js';
import mongoose from 'mongoose';
import {generateOTP, generateMailTransporter} from '../utils/mail.js';
import {sendError, generateRandomByte} from '../utils/helper.js';
const isValidObjectId = mongoose.Types.ObjectId;

export const create = async (req, res) => {
	const {name, email, password} = req.body;

	const oldUser = await User.findOne({email});

	if (oldUser) return sendError(res, 'This email is already in use!');

	const newUser = new User({name, email, password});
	await newUser.save();

	// generate 6 digit otp
	let OTP = generateOTP();

	// store otp inside our db
	const newEmailVerificationToken = new EmailVerificationToken({
		owner: newUser._id,
		token: OTP,
	});

	await newEmailVerificationToken.save();

	// send that otp to our user

	var transport = generateMailTransporter();

	transport.sendMail({
		from: 'allanjeanjacques@hotmail.com',
		to: newUser.email,
		subject: 'Email Verification',
		html: `
      <p>Your verification OTP</p>
      <h1>${OTP}</h1>

    `,
	});

	res.status(201).json({
		user: {
			id: newUser._id,
			name: newUser.name,
			email: newUser.email,
		},
	});
};

export const verifyEmail = async (req, res) => {
	const {userId, OTP} = req.body;

	if (!isValidObjectId(userId)) return res.json({error: 'Invalid user!'});

	const user = await User.findById(userId);
	if (!user) return sendError(res, 'user not found!', 404);

	if (user.isVerified) return sendError(res, 'user is already verified!');

	const token = await EmailVerificationToken.findOne({owner: userId});
	if (!token) return sendError(res, 'token not found!');

	const isMatched = await token.compareToken(OTP);
	if (!isMatched) return sendError(res, 'Please submit a valid OTP!');

	user.isVerified = true;
	await user.save();

	await EmailVerificationToken.findByIdAndDelete(token._id);

	var transport = generateMailTransporter();

	transport.sendMail({
		from: 'allanjeanjacques@hotmail.com',
		to: user.email,
		subject: 'Welcome Email',
		html: '<h1>Welcome to our app and thanks for choosing us.</h1>',
	});

	const jwtToken = jwt.sign({userId: user._id}, process.env.JWT_SECRET);
	res.json({
		user: {
			id: user._id,
			name: user.name,
			email: user.email,
			token: jwtToken,
			isVerified: user.isVerified,
			role: user.role,
		},
		message: 'Your email is verified.',
	});
};

export const resendEmailVerificationToken = async (req, res) => {
	const {userId} = req.body;

	const user = await User.findById(userId);
	if (!user) return sendError(res, 'user not found!');

	if (user.isVerified) return sendError(res, 'This email id is already verified!');

	const alreadyHasToken = await EmailVerificationToken.findOne({
		owner: userId,
	});
	if (alreadyHasToken) return sendError(res, 'Only after one hour you can request for another token!');

	// generate 6 digit otp
	let OTP = generateOTP();

	// store otp inside our db
	const newEmailVerificationToken = new EmailVerificationToken({
		owner: user._id,
		token: OTP,
	});

	await newEmailVerificationToken.save();

	// send that otp to our user

	var transport = generateMailTransporter();

	transport.sendMail({
		from: 'allanjeanjacques@hotmail.com',
		to: user.email,
		subject: 'Email Verification',
		html: `
      <p>Your verification OTP</p>
      <h1>${OTP}</h1>

    `,
	});

	res.json({
		message: 'New OTP has been sent to your registered email accout.',
	});
};

export const forgetPassword = async (req, res) => {
	const {email} = req.body;

	if (!email) return sendError(res, 'email is missing!');

	const user = await User.findOne({email});
	if (!user) return sendError(res, 'User not found!', 404);

	const alreadyHasToken = await PasswordResetToken.findOne({owner: user._id});
	if (alreadyHasToken) return sendError(res, 'Only after one hour you can request for another token!');

	const token = await generateRandomByte();
	const newPasswordResetToken = await PasswordResetToken({
		owner: user._id,
		token,
	});
	await newPasswordResetToken.save();

	const resetPasswordUrl = `http://localhost:3000/auth/reset-password?token=${token}&id=${user._id}`;

	const transport = generateMailTransporter();

	transport.sendMail({
		from: 'allanjeanjacques@hotmail.com',
		to: user.email,
		subject: 'Reset Password Link',
		html: `
      <p>Click here to reset password</p>
      <a href='${resetPasswordUrl}'>Change Password</a>

    `,
	});

	res.json({message: 'Link sent to your email!'});
};

export const sendResetPasswordTokenStatus = (req, res) => {
	res.json({valid: true});
};

export const resetPassword = async (req, res) => {
	const {newPassword, userId} = req.body;

	const user = await User.findById(userId);
	const matched = await user.comparePassword(newPassword);
	if (matched) return sendError(res, 'The new password must be different from the old one!');

	user.password = newPassword;
	await user.save();

	await PasswordResetToken.findByIdAndDelete(req.resetToken._id);

	const transport = generateMailTransporter();

	transport.sendMail({
		from: 'allanjeanjacques@hotmail.com',
		to: user.email,
		subject: 'Password Reset Successfully',
		html: `
      <h1>Password Reset Successfully</h1>
      <p>Now you can use new password.</p>

    `,
	});

	res.json({
		message: 'Password reset successfully, now you can use new password.',
	});
};

export const signIn = async (req, res, next) => {
	const {email, password} = req.body;

	const user = await User.findOne({email});
	if (!user) return sendError(res, 'Email/Password mismatch!');

	const matched = await user.comparePassword(password);
	if (!matched) return sendError(res, 'Email/Password mismatch!');

	const {_id, name, isVerified, role} = user;

	const jwtToken = jwt.sign({userId: _id}, process.env.JWT_SECRET);

	res.json({
		user: {id: _id, name, email, token: jwtToken, isVerified, role},
	});
};

export const getAllUsers = async (req, res) => {
	try {
		const users = await User.find();
		return res.json(users);
	} catch (error) {
		return sendError(res, 'Something went wrong');
	}
};

export const getIsAuth = (req, res) => {
	const {user} = req;
	res.json({
		user: {
			id: user._id,
			name: user.name,
			email: user.email,
			isVerified: user.isVerified,
			role: user.role,
		},
	});
};
