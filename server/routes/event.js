import express from 'express';
import { getEvent, createEvent, updateEvent, deleteEvent, showEvent } from '../controllers/event.js';
import { admin, auth } from '../middleware/auth.js';

const router = express.Router();

router.get("/", getEvent);
router.get("/show/:id", showEvent);
router.post("/add", auth, admin, createEvent);
router.patch("/:id", auth, admin, updateEvent);
router.delete("/:id", auth, admin, deleteEvent);

export default router;