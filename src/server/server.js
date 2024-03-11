import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import LocationRouter from './router/router.js';
import activityRouter from './router/router.js'
import touristRouter from './router/router.js'

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/location', LocationRouter);
app.use('/activity', activityRouter);
app.use('/tourists', touristRouter)


export { app };
