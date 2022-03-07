import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModal from "../models/user.js";
import mongoose from "mongoose";
import organizerP from "../models/organizerProfile.js";
import userP from "../models/userProfile.js";
import Event from "../models/event.js";
import user from "../models/user.js";

const secret = "test";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (!oldUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5h",
    });

    res.status(200).json({ result: oldUser, token });
  } catch (err) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { email, password, firstName, lastName, gender, phone } = req.body;

  try {
    const oldUser = await UserModal.findOne({ email });

    if (oldUser)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await UserModal.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      gender,
      phone,
    });

    const profile = await userP.create({ user: result._id });

    const token = jwt.sign({ email: result.email, id: result._id }, secret, {
      expiresIn: "5h",
    });

    res.status(201).json({ result, token, profile });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });

    console.log(error);
  }
};

export const ChangeRole = async (req, res) => {
  const { id } = req.params;
  const { role, event } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("Not Found ! ");
  const updatedUser = await UserModal.findByIdAndUpdate(id, { event });
  const organizer = await organizerP.create({ event, user: updatedUser._id });
  updatedUser.role = role;
  updatedUser.organizer = organizer._id;
  updatedUser.save();
  res.status(200).send(organizer);
};

export const getProfile = async (req, res) => {
  try {
    const profile = await UserModal.find().populate("event");
    res.status(200).send(profile);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

export const affectUserToEvent = async (req, res) => {
  try {
   
    const idUser = req.user;
    const { idEvent } = req.body;

    const updatedUser = { event: idEvent };
    const updatedEvent = { users: idUser, $inc: { attendees: -1 } };
    const getEvent = await Event.findById(idEvent);

    // fonction de button ya boy mahdi
    // fonction mail awka louta 

    if (getEvent.attendees > 0) {
      const getUser = await UserModal.findByIdAndUpdate(idUser, updatedUser);
      let getEvent = await Event.findByIdAndUpdate(idEvent, updatedEvent);

      res.status(200).send(getUser);
    }
  } catch (error) {
    res.send(error);
  }
};

export const updateProfile = async (req, res) => {
  // console.log("hello");
  const id = req.user.id;
  // console.log(id);

  const { nickname, age, education, status, hobbies, VrHead  } = req.body;
//   console.log(req.body);
  // console.log("body: "+req.body);
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Profile Found ! ");

  const updatedProfile = {
    nickname,
    age,
    education,
    status,
    hobbies,
    VrHead,
    _id: id,
  };

  const profile = await user.findByIdAndUpdate(id, updatedProfile, {
    new: true,
  });

  profile.save();

  res.status(200).send(profile);
};




// export const updateUser = async (req, res) => {

// //   const idUser = req.params.id;
//   // const id = req.user.id;

// console.log(req);
// // console.log();

//   if (!mongoose.Types.ObjectId.isValid(req.params.id))
//     return res.status(400).send("ID unknown : " + req.params.id);
//   try {
//     user.findOneAndUpdate(
//       { _id: req.params.id },
//       { $set: { nickname: req.body.nickname } },
//       { new: true, upsert: true, setDefaultsOnInsert: true },
//       (err, docs) => {
//         if (!err) return res.send(docs);
//         if (err) return res.status(500).send({ message: err });
//       }
//     );
//   } catch (err) {
//     return res.status(500).json({ message: err });
//   }
// };


/* 
 const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${req.user.name}</li>
      <li>Email: ${req.user.email}</li>
      <li>Phone: ${req.user.phone}</li>
    </ul>
    <h3>Message</h3>
    
  `;







    // create reusable transporter object using the default SMTP transport
      // let transporter = await nodemailer.createTransport({
      //   host: "mail.esprit.com",
      //   port: 587,
      //   secure: false, // true for 465, false for other ports
      //   auth: {
      //     user: "malek.haddar1@esprit.tn", // generated ethereal user
      //     pass: "hanover97", // generated ethereal password
      //   },
      //   tls: {
      //     rejectUnauthorized: false,
      //   },
      // });
      // // setup email data with unicode symbols
      // let mailOptions = {
      //   from: '"Nodemailer Contact" <malek.haddar1@esprit.tn>', // sender address
      //   to: "malekhaddar8@gmail.com", // list of receivers
      //   subject: "Node Contact Request", // Subject line
      //   text: "Hello world?", // plain text body
      //   html: output, // html body
      // };

      // // send mail with defined transport object
      // await transporter.sendMail(mailOptions, (error, info) => {
      //   if (error) {
      //     return console.log(error);
      //   }
      //   console.log("Message sent: %s", info.messageId);
      //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      //   res.render("contact", { msg: "Email has been sent" });
      // });
*/