import express from 'express';
const router = express.Router();

import createLocation from '../controllers/location.js'
import createActivity from '../controllers/activity.js';
router.post('/', createLocation);
router.post('/', createActivity);


export default router;
