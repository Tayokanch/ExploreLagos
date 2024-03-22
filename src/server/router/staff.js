import express from 'express'
import {createStaff, loginStaff} from '../controllers/staff.js'
const router = express.Router()


router.post('/register', createStaff)
router.post('/login', loginStaff)
export default router