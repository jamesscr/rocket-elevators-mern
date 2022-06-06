import mongoose from 'mongoose';

const actorSchema = mongoose.Schema(
	{
		name: {
			type: String,
			trim: true,
			required: true,
		},
		about: {
			type: String,
			trim: true,
			required: true,
		},
		gender: {
			type: String,
			trim: true,
			required: true,
		},
		avatar: {
			type: Object,
			url: String,
			public_id: String,
		},
	},
	{timestamps: true},
);

actorSchema.index({name: 'text'});

export default mongoose.model('Actor', actorSchema);
