import express from 'express';
import { getContact, createContact, deleteContact } from '../controllers/contact.js';


const router = express.Router();


router.get("/", getContact);
router.post("/add", createContact);
router.delete("/:id", deleteContact);

export default router;