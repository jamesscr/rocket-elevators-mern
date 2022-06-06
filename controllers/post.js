import Post from '../models/Post.js';

export const getAllPosts = async (req, res, next) => {
	try {
		const posts = await Post.find();
		if (posts.length === 0) return res.send('No posts found!');
		res.status(200).json(posts);
	} catch (error) {
		next(error);
	}
};

export const createPost = async (req, res, next) => {
	try {
		const {title, meta, content, slug, author, tags} = req.body;
		const newPost = new Post({title, meta, content, slug, author, tags});

		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		next(error);
	}
};
export const latestPost = async (req, res, next) => {
	try {
		const posts = await res.send('latestPost');
		res.json(posts);
	} catch (error) {
		next(error);
	}
};
