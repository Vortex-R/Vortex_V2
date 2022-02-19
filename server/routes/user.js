import express from 'express';
import { signin, signup, ChangeRole, getProfile, affectUserToEvent, updateProfile } from "../controllers/user.js";
import { admin, auth } from "../middleware/auth.js"

const router = express.Router();



router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/role/:id", ChangeRole);
router.get("/profiles", auth, admin, getProfile);
router.patch("/affect", auth, affectUserToEvent);
router.patch("/profile/update",auth, updateProfile);
// router.put("/profile", updateUser);

/* router.patch("/profile/update", auth, updateProfile); */

export default router;