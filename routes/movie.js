import express from 'express';
import {
	uploadTrailer,
	createMovie,
	removeMovie,
	getMovies,
	getMovieForUpdate,
	updateMovie,
	searchMovies,
	getLatestUploads,
	getSingleMovie,
	getRelatedMovies,
	getTopRatedMovies,
	searchPublicMovies,
} from '../controllers/movie.js';
import {isAuth, isAdmin} from '../middlewares/auth.js';
import {parseData} from '../middlewares/helper.js';
import {uploadVideo, uploadImage} from '../middlewares/multer.js';
import {validateMovie, validate, validateTrailer} from '../middlewares/validator.js';
const router = express.Router();

router.post('/upload-trailer', isAuth, isAdmin, uploadVideo.single('video'), uploadTrailer);
router.post('/create', isAuth, isAdmin, uploadImage.single('poster'), parseData, validateMovie, validateTrailer, validate, createMovie);
// router.patch(
//   "/update-movie-without-poster/:movieId",
//   isAuth,
//   isAdmin,
//   // parseData,
//   validateMovie,
//   validate,
//   updateMovieWithoutPoster
// );
router.patch('/update/:movieId', isAuth, isAdmin, uploadImage.single('poster'), parseData, validateMovie, validate, updateMovie);
router.delete('/:movieId', isAuth, isAdmin, removeMovie);
router.get('/movies', isAuth, isAdmin, getMovies);
router.get('/for-update/:movieId', isAuth, isAdmin, getMovieForUpdate);
router.get('/search', isAuth, isAdmin, searchMovies);

// for normal users
router.get('/latest-uploads', getLatestUploads);
router.get('/single/:movieId', getSingleMovie);
router.get('/related/:movieId', getRelatedMovies);
router.get('/top-rated', getTopRatedMovies);
router.get('/search-public', searchPublicMovies);

export default router;
