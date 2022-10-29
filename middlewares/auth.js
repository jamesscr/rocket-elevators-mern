import jwt from 'jsonwebtoken';
import {sendError} from '../utils/helper.js';
import User from '../models/User.js';

export const isAuth = async (req, res, next) => {
	const bearerToken = req.headers?.authorization;
	if (!bearerToken) return sendError(res, 'unauthorized access!');

	const token = bearerToken.split(' ')[1];
	if (!token) return sendError(res, 'unauthorized access!');

	const decode = jwt.verify(token, process.env.JWT_SECRET);
	if (!decode.userId) {
		return sendError(res, 'unauthorized access!');
	}

	const user = await User.findById(decode.userId);
	if (!user) {
		return sendError(res, 'unauthorized access!');
	}

	req.user = user;

	next();
};

export const isAdmin = async (req, res, next) => {
	const {user} = req;
	if (user.role === 'admin' || user.role === 'tech') next();
	else return sendError(res, 'unauthorized access!');
};
