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

  const createTouristDb = async(firstname, lastname, email, password)=> await prisma.tourist.create({
    data:{
      firstname,
      lastname,
      email,
      password

    }
  })

  
  export  { createLocationDb, createTouristDb}