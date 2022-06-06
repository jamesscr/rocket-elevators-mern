import express from 'express';
import {createActor, updateActor, removeActor, searchActor, getLatestActors, getSingleActor, getActors} from '../controllers/actor.js';
import {isAuth, isAdmin} from '../middlewares/auth.js';
import {uploadImage} from '../middlewares/multer.js';
import {actorInfoValidator, validate} from '../middlewares/validator.js';
const router = express.Router();

router.post('/create', isAuth, isAdmin, uploadImage.single('avatar'), actorInfoValidator, validate, createActor);

router.post('/update/:actorId', isAuth, isAdmin, uploadImage.single('avatar'), actorInfoValidator, validate, updateActor);

router.delete('/:actorId', isAuth, isAdmin, removeActor);
router.get('/search', isAuth, isAdmin, searchActor);
router.get('/latest-uploads', isAuth, isAdmin, getLatestActors);
router.get('/actors', isAuth, isAdmin, getActors);
router.get('/single/:id', getSingleActor);
export default router;
