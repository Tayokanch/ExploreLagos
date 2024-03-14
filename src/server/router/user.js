import express from 'express';

const router = express.Router();

import {createTourist} from '../controllers/user.js';
import { loginTourist } from '../controllers/user.js';




router.post('/register', createTourist)
router.post('/login', loginTourist)



export default router;
   