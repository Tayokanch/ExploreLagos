import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import locationRouter from './router/location.js';
import userRouter from './router/user.js'
import bookingsRouter from './router/booking.js'
import sendEmailROuter from './router/sendemail.js'
import staffRouter from './router/staff.js'

const app = express();
app.disable('x-powered-by');

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/location', locationRouter);
app.use('/user',userRouter)
app.use('/bookings', bookingsRouter)
app.use('/sendemail',sendEmailROuter)
app.use('/staff', staffRouter)

export { app };
