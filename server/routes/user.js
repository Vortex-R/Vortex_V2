import express from 'express';
import { signin, signup, ChangeRole } from "../controllers/user.js";
const router = express.Router();



router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/role/:id", ChangeRole);

export default router;