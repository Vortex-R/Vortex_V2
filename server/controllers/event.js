import express from 'express';
import mongoose from 'mongoose';

import { body, validationResult } from "express-validator";
import Event from '../models/event.js';

const router = express.Router();



export const getEvent = async(req, res) => {
    try {
        const allEvents = await Event.find();

        res.status(200).json(allEvents);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createEvent = async(req, res) => {
    var newEvent = new Event();
    newEvent.name = req.body.name;
    newEvent.attendees = req.body.attendees;
    newEvent.date = req.body.date;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } else {
        try {
            await newEvent.save();
            return res.status(200).json(newEvent);
        } catch (err) {
            console.log(err);
        }
    }
};

export const updateEvent = async(req, res) => {
    const { id } = req.params;
    const { name, attendees, date } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Event Found ! ");

    const updatedEvent = { name, attendees, date, _id: id };

    await Event.findByIdAndUpdate(id, updatedEvent, { new: true });
    res.json(updatedEvent);
};

export const deleteEvent = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send("No Event Found with id : ${id} ");

    await Event.findByIdAndRemove(id);
    res.json({ message: "Event deleted successfully." });
};

export default router;