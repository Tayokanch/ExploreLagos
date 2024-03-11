import prisma from "../utils/prisma";
import { createTouristDb } from "../domains/domain";

const createTourist = async(req, res) =>{
    const {firstname, lastname, email, password}= req.body

    if(!firstname || !lastname  || !email || !password ){
        res.status(400).json({error: 'Missing field in the request body'})
    }

    try{
        const createNewTourist = await createTouristDb(firstname, lastname, email, password)
        return res.status(201).json({Tourist: createNewTourist})
    }catch(e){
        res.status(500).json({error: e.message})

    }
}
export default createTourist