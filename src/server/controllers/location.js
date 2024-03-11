import prisma from '../utils/prisma.js'
import {createLocationDb} from '../domains/domain.js'

const createLocation = async(req, res)=>{
    const{
        name,
        category,
        about,
        highlights,
        price
    }= req.body


    if(!name || !about || !price){
        res.status(400).json({ error: 'Missing field in the request body'})
    }

    try{
        const createNewLocation = await createLocationDb(name,category, about,highlights, price)
        return res.status(201).json({ location: createNewLocation })

    }catch(e){
        res.status(500).json({error: e.message})
        console.log(e.message)
    }
}


const getLocations = async(req, res)=>{
    try{
        const getallLocations = await prisma.location.findMany()
        const location = getallLocations
        return res.status(200).json(location)

    }catch(e){
        console.error("Error fetching users:", e);
        return res.status(500).json({ e: 'Internal Server Error' });    }

}

export  {createLocation, getLocations};
