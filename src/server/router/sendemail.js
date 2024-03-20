import express from 'express';
import sendEmailController from '../controllers/sendemail.js';

const router = express.Router();

router.post('/', async (req, res) => {
    const { to, subject, html } = req.body; // Extract data from the request body

    try {
        await sendEmailController(to, subject, html, res);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending email' });
    }
});

export default router;
