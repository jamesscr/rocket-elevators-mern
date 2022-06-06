import express from 'express';
const router = express.Router();

import {
	create,
	verifyEmail,
	resendEmailVerificationToken,
	forgetPassword,
	sendResetPasswordTokenStatus,
	resetPassword,
	signIn,
	getIsAuth,
	getAllUsers,
} from '../controllers/user.js';
import {isAuth} from '../middlewares/auth.js';
import {isValidPassResetToken} from '../middlewares/user.js';
import {userValidtor, validate, validatePassword, signInValidator} from '../middlewares/validator.js';

router.post('/create', userValidtor, validate, create);
router.post('/sign-in', signInValidator, validate, signIn);
router.post('/verify-email', verifyEmail);
router.post('/resend-email-verification-token', resendEmailVerificationToken);
router.post('/forget-password', forgetPassword);
router.post('/verify-pass-reset-token', isValidPassResetToken, sendResetPasswordTokenStatus);
router.post('/reset-password', validatePassword, validate, isValidPassResetToken, resetPassword);

router.get('/is-auth', isAuth, getIsAuth);
router.get('/all-users', getAllUsers);

export default router;
