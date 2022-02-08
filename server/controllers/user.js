import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import UserModal from "../models/user.js";
import mongoose from "mongoose"
import organizerP from "../models/organizerProfile.js";
import Profile from "../models/userProfile.js";
import userP from "../models/userProfile.js";
import Event from "../models/event.js";
import user from "../models/user.js";


const secret = 'test';


export const signin = async(req, res) => {
    const { email, password } = req.body;

    try {
        const oldUser = await UserModal.findOne({ email });

        if (!oldUser) return res.status(404).json({ message: "User doesn't exist" });

        const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, { expiresIn: "5h" });

        res.status(200).json({ result: oldUser, token });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const signup = async(req, res) => {
    const { email, password, firstName, lastName, gender, phone } = req.body;

    try {
        const oldUser = await UserModal.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await UserModal.create({ email, password: hashedPassword, name: `${firstName} ${lastName}`, gender, phone });

        const profile = await userP.create({ user: result._id })

        const token = jwt.sign({ email: result.email, id: result._id }, secret, { expiresIn: "5h" });

        res.status(201).json({ result, token, profile });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });

        console.log(error);
    }
};

export const ChangeRole = async(req, res) => {
    const { id } = req.params;
    const { role, event } = req.body;
    const { org } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Task Found ! ");
    const updatedUser = await UserModal.findById(id);
    const organizer = await organizerP.create({ event, user: updatedUser._id })
    updatedUser.role = role
    updatedUser.organizer = organizer._id
    updatedUser.save()
    res.status(200).send(organizer);
};



export const getProfile = async(req, res) => {
    try {
        const profile = await UserModal.find();
        res.status(200).send(profile);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

/* export const updateProfile = async(req, res) => {

    const id = req.user.id;
    console.log(id);
    const { nickname, age, education, status, hobbies, VrHead } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Event Found ! ");

    const updatedProfile = { nickname, age, education, status, hobbies, VrHead, _id: id };

    await UserModal.findByIdAndUpdate(id, updatedProfile, { new: true });
    res.json(req.user);
};
 */






export const affectUserToEvent = async(req, res) => {
    try {
        const { idUser, idEvent } = req.body;
        /* console.log(idUser + "  " + idEvent) */
        const updatedUser = { event: idEvent }
        const updatedEvent = { users: idUser, $inc: { attendees: -1 } }
        const getEvent = await Event.findById(idEvent);
        /* console.log(getEvent); */
        if (getEvent.attendees > 0) {
            const getUser = await UserModal.findByIdAndUpdate(idUser, updatedUser);
            let getEvent = await Event.findByIdAndUpdate(idEvent, updatedEvent);
            /* console.log(getUser + " " + getEvent) */
            res.status(200).send(getUser);

        }
    } catch (error) {
        res.send(error);
    }
};