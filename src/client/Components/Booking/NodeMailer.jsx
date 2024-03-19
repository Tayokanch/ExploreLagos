import React from "react";
import nodemailer from "nodemailer";

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "tayokancho1@gmail.com",
    pass: "iewjdjkdsjksd",
  },
});

let details = {
  from: "tayokancho1@gmail.com",
  to: "receiver@gmail.com",
  subject: 'You have successbook a ticket to visit '
};

function NodeMailer() {
  return <div></div>;
}

export default NodeMailer;
