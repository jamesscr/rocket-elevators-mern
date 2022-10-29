import express from 'express';
import {createIntervention, getAllIntervention, getInterventionById} from '../controllers/interventions.js';
import {validate} from '../middlewares/validator.js';

const router = express.Router();

router.get('/get-all', getAllIntervention);
router.get('/get-by-id', getInterventionById);
router.post('/create', validate, createIntervention);

export default router;
