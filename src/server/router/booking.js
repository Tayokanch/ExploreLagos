import express from 'express'
import { createBookings } from '../controllers/bookings.js'
import { getBookings } from '../controllers/bookings.js'
import { getBookingsByLocationId } from '../controllers/bookings.js'

const router = express.Router()

router.post('/', createBookings)
router.get('/:userId', getBookings)
router.get('/locationId/:locationId', getBookingsByLocationId)


export default router