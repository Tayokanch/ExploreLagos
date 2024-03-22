import prisma from '../utils/prisma.js'
const createLocationDb = async(name,category, about, highlights, price, )=> await prisma.location.create({
      data:{
          name,
          category,
          about,
          highlights,
          price
      }
  })

  const createTouristDb = async(firstname, lastname, email, hashedPassword)=> await prisma.user.create({
    data:{
      firstname,
      lastname,
      email,
      password: hashedPassword

    }
  })

  const createBookingDb = async (userId, locationId, printName, bookingfor, price, locationName, visitingDate, referenceNo) => {
    try {
      return await prisma.bookings.create({
        data: {
          user: { connect: { id: userId } },
          location: { connect: { id: locationId } },
          printName,
          bookingfor,
          price,
          locationName,
          visitingDate,
          referenceNo
        }
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  }

  const getUserBookings = async (theUserId) => {
    try {
      const userBookings = await prisma.bookings.findMany({
        where: {
          userId: theUserId,
        },
      });
      return userBookings
    } catch (error) {
      console.error("Error fetching user bookings:", error);
    }
};
  
  
  export  { createLocationDb, createTouristDb, createBookingDb, getUserBookings}


  