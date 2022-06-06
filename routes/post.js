import express from 'express';
import {thumbnail} from '../middlewares/multer.js';
import {createPost, getAllPosts, latestPost} from '../controllers/post.js';
import {postValidtor, validate} from '../middlewares/validator.js';

const router = express.Router();

router.get('/get-all-posts', getAllPosts);
router.post(
	'/create',
	thumbnail.single('thumbnail'),
	(req, res, next) => {
		const {tags} = req.body;
		if (tags) req.body.tags = JSON.parse(tags);
		next();
	},
	postValidtor,
	validate,
	createPost,
);
router.post('/latest', latestPost);

export default router;
