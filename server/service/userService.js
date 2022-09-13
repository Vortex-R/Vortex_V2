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
    host: "smtp.gmail.com", // hostname
    service: "gmail",
    secure: true, // TLS requires secureConnection to be false
    port: 2525, // port for secure SMTP

    auth: {
      user: "contact.vortex.reaction@gmail.com",
      pass: "fypfmzcdhpbfeexn",
    },
  });
  const mailOptions = {
    from: "contact.vortex.reaction@gmail.com",
    to: user.email,
    attachDataUrls: true,
    subject: "Email confirmation",
    html: `<h1>Email Confirmation</h1> <h2>Hello Mr.  ${user.name}</h2><p>Thank you for your registration on Vortex_Reaction.</p> <p>In order for us to offer you the best possible service, confirm your account and to allow you to subscribe to the newsletter, you must confirm receipt of this mail by clicking on the link below</p> <a href=https://vortexreaction.cyclic.app/api/user/verify/${verificationToken}> Click here</a>
    <p>If you have received this email by mistake, please ignore it.</p>
    <p>Sincerely yours,</p>
    <p>Vortex_Reaction’s team </p>
    </div>`,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};
