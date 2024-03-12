import express from 'express';
const router = express.Router();

import {createLocation} from '../controllers/location.js'
import { getLocations } from '../controllers/location.js';
import {createTourist} from '../controllers/Tourist.js';
import { loginTourist } from '../controllers/Tourist.js';


router.post('/', createLocation);
router.get('/', getLocations )
router.post('/register', createTourist)
router.post('/login', loginTourist)


export default router;
   