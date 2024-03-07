import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import locationRouter from './router/location.js';
import activityRouter from './router/location.js'

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/location', locationRouter);
app.use('/activity', activityRouter);


export { app };
