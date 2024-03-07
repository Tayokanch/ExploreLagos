import prisma from '../utils/prisma.js'

const createActivityDb = async (topic, description, locationId) => {
    
      const createdActivity = await prisma.activity.create({
        data: {
          topic,
          description,
          location: { connect: { id: locationId } }, 
        },
      });
    } 
  
  export default createActivityDb