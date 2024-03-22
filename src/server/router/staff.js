import express from 'express'
import {createStaff} from '../controllers/staff.js'
const router = express.Router()


router.post('/', createStaff)
export default router