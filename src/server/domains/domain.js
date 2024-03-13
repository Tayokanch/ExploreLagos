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

  const createBookingDb = async(printName, locationId, userId, bookingfor)=> prisma.bookings.create({
    data:{
      userId,
      printName,
      locationId,
      bookingfor: type
    }
  })
  
  export  { createLocationDb, createTouristDb, createBookingDb}


  