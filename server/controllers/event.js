import express from 'express';
import mongoose from 'mongoose';

import { body, validationResult } from "express-validator";
import Event from '../models/event.js';

const router = express.Router();



export const getEvent = async(req, res) => {
    try {
        const allEvents = await Event.find();
        // console.log(allEvents);
        res.status(200).json(allEvents);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};


export const showEvent = async(req, res) => {
    try {
        // console.log(Event);
        const event = await Event.findOne();
        // console.log(allEvents);
        res.status(200).json(event);
    } catch (error) {
        res.status(404).json({ message: error });
    }
};

export const createEvent = async (req, res) => {
  var newEvent = new Event();
  newEvent.name = req.body.name;
  newEvent.attendees = req.body.attendees;
  newEvent.startDate = req.body.startDate;
  newEvent.endDate = req.body.endDate;
  newEvent.link = req.body.link;
  
  newEvent.price = req.body.price;
  newEvent.parking = req.body.parking;
  newEvent.overview = req.body.overview;
  newEvent.location = req.body.location;
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

export const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { name, attendees, date, link } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Event Found ! ");

  const updatedEvent = { name, attendees, date, link, _id: id };

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