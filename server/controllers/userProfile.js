import express from 'express';
import mongoose from 'mongoose';
import user from '../models/user.js';

import userP from '../models/userProfile.js';

const router = express.Router();



export const getProfile = async(req, res) => {
    try {
        const allProfiles = await userP.find().populate('user')

        res.status(200).send(allProfiles);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};



export const updateProfile = async(req, res) => {
    const id = req.user.id;
    console.log(id);

    const { nickname, age, education, status, hobbies, VrHead } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Profile Found ! ");

    const updatedProfile = { nickname, age, education, status, hobbies, VrHead, _id: id };

    const profile = await user.findByIdAndUpdate(id, updatedProfile, { new: true });

    profile.save()

    res.status(200).send(profile);
};

/* export const updateProfile = async(req, res) => {

    const id = req.user.id;
    console.log(id);
    const { nickname, age, education, status, hobbies, VrHead } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Event Found ! ");

    const updatedProfile = { nickname, age, education, status, hobbies, VrHead, _id: id };

    await user.findByIdAndUpdate(id, updatedProfile, { new: true });
    res.json(req.user);
};

 */




export default router;