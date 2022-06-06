import mongoose from 'mongoose';
import categories from '../utils/categories.js';

const postSchema = mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
			trim: true,
		},
		content: {
			type: String,
			required: true,
			trim: true,
		},
		meta: {
			type: String,
			required: true,
			trim: true,
		},
		tags: [String],
		author: {
			type: String,
			required: true,
			default: 'Admin',
		},
		slug: {
			type: String,
			trim: true,
			required: true,
			unique: true,
		},
		// categories: {
		// 	type: [String],
		// 	enum: categories,
		// },
		thumbnail: {
			type: Object,
			url: {
				type: URL,
			},
			public_id: {
				type: String,
				required: true,
			},
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model('Post', postSchema);
