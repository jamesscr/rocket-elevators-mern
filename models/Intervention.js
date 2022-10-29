import mongoose from 'mongoose';
import categories from '../utils/categories.js';

const InterventionSchema = mongoose.Schema(
	{
		customer: {
			type: String,
			required: true,
			trim: true,
		},
		address: {
			type: String,
			required: true,
			trim: true,
		},
		categories: {
			type: [String],
			enum: categories,
		},
		tech: {
			type: String,
			required: true,
			default: 'Admin',
		},
	},
	{
		timestamps: true,
	},
);

export default mongoose.model('Intervention', InterventionSchema);
