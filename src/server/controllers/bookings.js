import prisma from '../utils/prisma.js'
import { createBookingDb } from '../domains/domain.js'
const createBookings = async (req, res) => {
    const { userId, locationId, printName, bookingfor, price } = req.body;
  
    if (!userId || !locationId || !price) {
      console.log(req.body);
      return res.status(400).json({ error: 'Missing field in the request body' });
    }
  
    try {
      const createNewLocation = await createBookingDb(userId, locationId, printName, bookingfor, price);
      return res.status(201).json({ bookings: createNewLocation });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ error: e.message });
    }
  }
  

export default createBookings