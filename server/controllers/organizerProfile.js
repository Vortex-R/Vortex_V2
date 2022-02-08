import express from 'express';
import mongoose from 'mongoose';

import organizerP from '../models/organizerProfile.js';
import user from '../models/user.js';

const router = express.Router();



export const getProfile = async(req, res) => {
    try {
        const allProfiles = await organizerP.findById().populate('user');

        res.status(200).send(allProfiles);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};



export const updateProfile = async(req, res) => {
    const { id } = req.params;
    const { name, phone } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Profile Found ! ");

    const updatedProfile = { name, phone, _id: id };

    const profile = await user.findByIdAndUpdate(id, updatedProfile, { new: true });

    profile.save()

    res.status(200).send(profile);
};


export default router;