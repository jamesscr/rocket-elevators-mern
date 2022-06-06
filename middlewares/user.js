import mongoose from 'mongoose';
import PasswordResetToken from '../models/PasswordResetToken.js';
import {sendError} from '../utils/helper.js';
const isValidObjectId = mongoose.Types.ObjectId;

export const isValidPassResetToken = async (req, res, next) => {
	const {token, userId} = req.body;

	if (!token.trim() || !isValidObjectId(userId)) return sendError(res, 'Invalid request!');

	const resetToken = await PasswordResetToken.findOne({owner: userId});
	if (!resetToken) return sendError(res, 'Unauthorized access, invalid request!');

	const matched = await resetToken.compareToken(token);
	if (!matched) return sendError(res, 'Unauthorized access, invalid request!');

	req.resetToken = resetToken;
	next();
};
