import nodemailer from 'nodemailer';

const sendEmailController = async (to, subject, html, res) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "tayokancho1@gmail.com",
            pass: "hjav esnz npog qhvu"
        },
    });

    let mailOptions = {
        from: 'tayokancho1@gmail.com',
        to,
        subject,
        html
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending email' });
    }
};

export default sendEmailController;
