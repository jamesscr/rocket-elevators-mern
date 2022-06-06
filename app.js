import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';
import 'dotenv';
import './db/index.js';

import postRouter from './routes/post.js';
import userRouter from './routes/user.js';
import actorRouter from './routes/actor.js';
import movieRouter from './routes/movie.js';
import reviewRouter from './routes/review.js';

import {errorHandler} from './middlewares/error.js';
import {handleNotFound} from './utils/helper.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/user', userRouter);
app.use('/api/actor', actorRouter);
app.use('/api/movie', movieRouter);
app.use('/api/review', reviewRouter);
app.use('/api/post', postRouter);

app.use('/*', handleNotFound);

app.use(errorHandler);

// app.post(
//   "/sign-in",
//   (req, res, next) => {
//     const { email, password } = req.body;
//     if (!email || !password)
//       return res.json({ error: "email/password missing!" });
//     next();
//   },
//   (req, res) => {
//     res.send("<h1>Hello I am about page</h1>");
//   }
// );

app.listen(8000, () => {
	console.log('the port is listening on port 8000');
});
