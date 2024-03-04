import express from 'express';
const router = express.Router();

import createLocation from '../controllers/location.js'
router.post('/', createLocation);

export default router;
