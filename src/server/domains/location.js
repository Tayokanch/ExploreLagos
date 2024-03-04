import prisma from '../utils/prisma.js'

const createLocationDb = async(location, history, price)=> await prisma.location.create({
    data:{
        location,
        history,
        price
    }
})

export default createLocationDb