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

  const createTouristDb = async(firstname, lastname, email, hashedPassword)=> await prisma.tourist.create({
    data:{
      firstname,
      lastname,
      email,
      password: hashedPassword

    }
  })

  
  export  { createLocationDb, createTouristDb}


  