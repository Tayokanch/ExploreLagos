import React from "react";

const sendEmail = async () => {
  const emailData = {
    to: "tayoquadri11@gmail.com",
    subject: "You have successfully booked a ticket to visit",
    html: "<b>Hello, this is a test email.</b>",
  };

  try {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emailData),
    };

    const response = await fetch("http://localhost:3030/sendemail", options);

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export { sendEmail };
