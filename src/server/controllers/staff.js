import prisma from "../utils/prisma.js";
import { staffDb } from "../domains/domain.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;

const createStaff = async (req, res) => {
    const { firstname, lastname, username, email, password, role, locationId } = req.body;
    if (!firstname || !lastname || !email || !username || !password || !role || !locationId) {
        return res.status(400).json({ error: 'Missing field(s) in the request body' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        
        const createNewStaff = await staffDb(firstname, lastname, username, email, hashedPassword, role, locationId);
        
        delete createNewStaff.password;

        return res.status(200).json({ staff: createNewStaff });
    } catch (error) {
        console.error("Error creating staff:", error);
        return res.status(500).json({ error: error.message });
    }
};


const loginStaff = async(req, res)=>{
    const {firstname, lastname, email, username, password}= req.body
    try{
        const foundStaff = await prisma.staff.findUnique({
            where: {
                username: username
            }
        });
        

        if(!foundStaff){
            return res.status(401).json({error:'Invalid username or password'})
        }

        const comparePassword = await bcrypt.compare(password, foundStaff.password)
        if (!comparePassword) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }
        const createToken = (payload, secret) => {
            const token = jwt.sign(payload, secret, { expiresIn: '1h' }); 
            return token;
        };

        const generatedToken = createToken({ 
           firstname: foundStaff.firstname,
            lastname: foundStaff.lastname,
            username,
            locationId :foundStaff.locationId
        }, secret);

        return res.status(201).json({token: generatedToken})
    }catch(e){
        return res.status(500).json({error:e.message})
    }
}

export  {createStaff, loginStaff}