import prisma from '../utils/prisma.js';
import { createTouristDb } from '../domains/domain.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const secret = process.env.JWT_SECRET;


const createTourist = async (req, res) => {
    const { firstname, lastname, email, password } = req.body;

    if (!firstname || !lastname || !email || !password) {
        return res.status(400).json({ error: 'Missing field in the request body' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 12)

        const createNewTourist = await createTouristDb(firstname, lastname, email, hashedPassword);
        delete createNewTourist.password
        return res.status(201).json({ Tourist: createNewTourist });
    } catch (e) {
        return res.status(500).json({ error: e.message });
    }
};


const loginTourist = async (res, req)=>{
    const {email, password} = req.body
    const foundTourist = prisma.Tourist.findUnique({
        where:{
            email: email
        }
    })
    if (!foundTourist) {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }
    const comparePassword = await bcrypt.compare(password, Tourist.password)
    console.log(comparePassword)

    if (!comparePassword) {
        return res.status(401).json({ error: 'Invalid username or password.' });
    }

    const createToken = (payload, secret)=>{
        const token = jwt.sign(payload, secret)
        return token
    }
    const generateToken = createToken(email, secret)

    return res.json({ data: generateToken });

}

export  {createTourist, loginTourist};
