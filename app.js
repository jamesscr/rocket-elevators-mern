import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import 'express-async-errors';
import 'dotenv';
import './db/index.js';

import interventionsRouter from './routes/interventions.js';
import userRouter from './routes/user.js';

import {errorHandler} from './middlewares/error.js';
import {handleNotFound} from './utils/helper.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use('/api/user', userRouter);
app.use('/api/interventions', interventionsRouter);

app.use('/*', handleNotFound);

app.use(errorHandler);

// app.interventions(
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
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
	console.log('the port is listening on port 8000');
});
