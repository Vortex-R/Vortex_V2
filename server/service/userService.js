import User from "../models/user.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
export const IfUserParticipated = async (userId, idEvent) => {
  const user = await User.findOne({ _id: userId }).populate("event");
  if (!user) throw new Error("User dosnt exist");
  if (user.event.length > 0) {
    const res = user.event.map((e) => {
      if (!idEvent.localeCompare(e._id)) {
        return false;
      } else {
        return true;
      }
    });
    return res;
  }
  return true;
};
export const verifyEmail = async (user) => {
  const secret = "test";
  const verificationToken = jwt.sign({ code: user._id }, secret);
  //TODO: delete mail sending
  const updatedUser = await User.findByIdAndUpdate(
    { _id: user._id },
    { confirmationCode: verificationToken }
  );
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "malekhaddar8@gmail.com",
      pass: "hanover96",
    },
  });
  const mailOptions = {
    from: "malekhaddar8@gmail.com",
    to: user.email,
    subject: "Event Ticket",
    html: `<h1>Email Confirmation</h1> <h2>Hello ${user.name}</h2><p>Thank you for subscribing. Please confirm your email by clicking on the following link</p><a href=https://vr-event.herokuapp.com/api/user/verify/${verificationToken}> Click here</a></div>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
