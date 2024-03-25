import prisma from '../utils/prisma.js';
import { createBookingDb } from '../domains/domain.js'
import { getUserBookings } from '../domains/domain.js';
import { getBookingsByLocationIdDb } from '../domains/domain.js';
const createBookings = async (req, res) => {
    const { userId, locationId, printName, bookingfor, price, locationName, visitingDate, referenceNo} = req.body;
  
    if (!userId || !locationId || !price) {
      console.log(req.body);
      return res.status(400).json({ error: 'Missing field in the request body' });
    }
  
    try {
      const newbooking = await createBookingDb(userId, locationId, printName, bookingfor, price, locationName, visitingDate, referenceNo);
      console.log('this is the new booking', newbooking)
      return res.status(201).json({ bookings: newbooking });
    } catch (e) {
      console.log(e.message);
      return res.status(500).json({ error: e.message });
    }


}

const getBookings = async(req, res)=>{
    const userId = Number(req.params.userId);  
    try{
        const userBookings = await getUserBookings(userId)
        return res.status(201).json({Bookings: userBookings})
    }catch(e){
        console.error("Error fetching user bookings:", e);
        res.status(500).json({e:'Internal server error'})
    }
}


const getBookingsByLocationId = async (req, res) => {
  const locationId = Number(req.params.locationId);
  try {
    const bookingWithLocationId = await getBookingsByLocationIdDb(locationId);
    return res.status(200).json({ bookings: bookingWithLocationId });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};



  

export  {createBookings, getBookings, getBookingsByLocationId}