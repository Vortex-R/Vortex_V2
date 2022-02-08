import express from 'express';
import { updateProfile, getProfile } from "../controllers/userProfile.js";
import { auth } from "../middleware/auth.js"

const router = express.Router();




router.get("/profile", getProfile);
router.patch("/profile/:id", updateProfile);

export default router;