import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  gender: { type: String },
  phone: { type: Number },
  role: { type: Number, required: true, default: 0 },
  verified: { type: Boolean, default: false },
  confirmationCode: { type: String },
  nickname: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  education: {
    type: String,
    required: false,
  },
  status: {
    type: String,
    required: false,
  },
  hobbies: {
    type: String,
    required: false,
  },
  VrHead: {
    type: String,
    required: false,
  },

  naissance: {
    type: Date,
    required: false,
  },
  situation: {
    type: String,
    required: false,
  },
  job: {
    type: String,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },

  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "organizerP",
    required: false,
  },

  event: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
      required: false,
    },
  ],
});

export default mongoose.model("User", userSchema);
