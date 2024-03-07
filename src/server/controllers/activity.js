import prisma from '../utils/prisma.js'
import createActivityDb from '../domains/activity.js'

const createActivity = async(req, res)=>{
    const{
        topic,
        description,
        locationId,

    }= req.body


    if(!topic ||!description){
        res.status(400).json({ error: 'Missing field in the request body'})
    }

    try{
        const createNewActivity = await createActivityDb(topic,description,locationId)
        return res.status(201).json({ post: createNewActivity })

    }catch(e){
        res.status(500).json({error: e.message})
        console.log(e.message)
    }
}






export default createActivity;
