import express from 'express';
const router = express.Router();

import {addReview, updateReview, removeReview, getReviewsByMovie} from '../controllers/review.js';
import {isAuth} from '../middlewares/auth.js';
import {validateRatings, validate} from '../middlewares/validator.js';

router.post('/add/:movieId', isAuth, validateRatings, validate, addReview);
router.patch('/:reviewId', isAuth, validateRatings, validate, updateReview);
router.delete('/:reviewId', isAuth, removeReview);
router.get('/get-reviews-by-movie/:movieId', getReviewsByMovie);

export default router;
