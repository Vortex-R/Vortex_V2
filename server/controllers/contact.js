import express from 'express';

import Contact from '../models/contact.js';

import mongoose from 'mongoose';
import { body, validationResult } from "express-validator";
const router = express.Router();


export const getContact = async(req, res) => {
    try {
        const allContacts = await Contact.find();
        console.log(allContacts);
        res.status(200).send(allContacts);
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const createContact = async(req, res) => {
    var newContact = new Contact();
    newContact.email = req.body.email;
    newContact.subject = req.body.subject;
    newContact.messages = req.body.messages;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });

    } else {
        try {
            await newContact.save();
            return res.status(200).json(newContact);
        } catch (err) {
            console.log(err);
        }
    }
}

export const deleteContact = async(req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
        return res.status(404).send(" No ConnewContact found with id : ${id} ");

    await ConnewContact.findByIdAndRemove(id);
    res.json({ message: " ConnewContact has been deleted successfully ! " })

}




export default router;