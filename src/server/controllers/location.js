import prisma from '../utils/prisma.js'
import createLocationDb from '../domains/location.js'

const createLocation = async(req, res)=>{
    const{
        location,
        category,
        history,
        activities,
        price
    }= req.body


    if(!location || !history || !price){
        res.status(400).json({ error: 'Missing field in the request body'})
    }

    try{
        const createNewLocation = await createLocationDb(location,category, history,activities, price)
        return res.status(201).json({ location: createNewLocation })

    }catch(e){
        res.status(500).json({error: e.message})
        console.log(e.message)
    }
}


const getLocations = ()=>{
    
}

export default createLocation;
