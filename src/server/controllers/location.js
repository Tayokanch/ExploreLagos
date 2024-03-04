import createLocationDb from "../domains/location";
import prisma from '../utils/prisma.js'

const createLocation = async(req, res)=>{
    const{
        location,
        history,
        price
    }= req.body


    if(!location || !history || !price){
        res.status(400).json({ error: 'Missing field in the request body'})
    }

    try{
        const createNewLocation = await createLocationDb(location, history, price)
        return res.status(201).json({ post: createNewLocation })

    }catch(e){
        res.status(500).json({error: e.message})
    }
}

export default createLocation;
