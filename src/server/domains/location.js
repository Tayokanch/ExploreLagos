import prisma from '../utils/prisma.js'
const createLocationDb = async(location,category, history, activities, price)=> await prisma.location.create({
    data:{
        location,
        category,
        history,
        activities,
        price
    }
})

export default createLocationDb