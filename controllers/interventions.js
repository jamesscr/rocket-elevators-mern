import Intervention from '../models/Intervention.js';

export const getAllIntervention = async (req, res, next) => {
	try {
		const interventions = await Intervention.find();
		if (interventions.length === 0) return res.send('No interventions found!');
		res.status(200).json(interventions);
	} catch (error) {
		next(error);
	}
};

export const getInterventionById = async (req, res, next) => {
	try {
		const interventions = await Intervention.findById();
		if (interventions.length === 0) return res.send('No interventions found!');
		res.status(200).json(interventions);
	} catch (error) {
		next(error);
	}
};

export const createIntervention = async (req, res, next) => {
	try {
		const {title, meta, content, slug, author, tags} = req.body;
		const newIntervention = new Intervention({title, meta, content, slug, author, tags});

		await newIntervention.save();
		res.status(201).json(newIntervention);
	} catch (error) {
		next(error);
	}
};

// export const latestIntervention = async (req, res, next) => {
// 	try {
// 		const interventions = await res.send('latestIntervention');
// 		res.json(interventions);
// 	} catch (error) {
// 		next(error);
// 	}
// };
