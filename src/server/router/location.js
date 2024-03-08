import express from 'express';
const router = express.Router();

import {createLocation} from '../controllers/location.js'
import createActivity from '../controllers/activity.js';
import { getLocations } from '../controllers/location.js';


router.post('/', createLocation);
router.get('/', getLocations )


export default router;
