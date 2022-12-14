import express from "express";
import { upload } from "../middleware/upload.js";

import {
  signin,
  signup,
  ChangeRole,
  getProfile,
  affectUserToEvent,
  updateProfile,
  userVerification,
  userParticipated,
  googleAuth,
  getUserData,
  changePassword,
  updatePicture,
} from "../controllers/user.js";
import { admin, auth } from "../middleware/auth.js";

const router = express.Router();

router.post("/googleAuth", googleAuth);
router.post("/signin", signin);
router.post("/signup", signup);
router.patch("/role/:id", ChangeRole);
router.get("/profiles", getProfile);
router.patch("/affect", auth, affectUserToEvent);
router.patch("/checkIfUserParticipated", auth, userParticipated);
router.get("/verify/:confirmationCode", userVerification);
router.get("/getUserData/:id", getUserData);
router.patch("/changepassword", auth, changePassword);

// router.get("/currentUser", currentUser);

// router.put("/profile", updateUser);

router.patch("/profile/update", auth, updateProfile);

router.put("/picture", auth, upload("picture", "users/image/"), updatePicture);

export default router;
