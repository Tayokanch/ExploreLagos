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

export default createLocationDb