import prisma from '../utils/prisma.js'
const createLocationDb = async(name,category, about, highlights, price)=> await prisma.location.create({
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

  const createBookingDb = async (userId, locationId, printName, bookingfor, price) => {
    try {
      return await prisma.bookings.create({
        data: {
          user: { connect: { id: userId } },
          locationId,
          printName,
          bookingfor,
          price,
        }
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      throw error;
    }
  }
  
  
  export  { createLocationDb, createTouristDb, createBookingDb}


  