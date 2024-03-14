import express from 'express'
import createBookings from '../controllers/bookings.js'

const router = express.Router()

router.post('/', createBookings)

export default router