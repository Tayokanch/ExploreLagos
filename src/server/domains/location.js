import prisma from '../utils/prisma.js'
const createLocationDb = async(location,category, about, highlights, price)=> await prisma.location.create({
    data:{
        location,
        category,
        about,
        highlights,
        price
    }
})

export default createLocationDb