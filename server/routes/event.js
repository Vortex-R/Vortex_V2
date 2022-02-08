import express from 'express';
import { getEvent, createEvent, updateEvent, deleteEvent } from '../controllers/event.js';
import { admin, auth } from '../middleware/auth.js';

const router = express.Router();

router.get("/", getEvent);
router.post("/add", auth, admin, createEvent);
router.patch("/:id", auth, admin, updateEvent);
router.delete("/:id", auth, admin, deleteEvent);

export default router;