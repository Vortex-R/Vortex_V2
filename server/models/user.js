import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  email: { type: String, required: true },
  musicGenres: [{ type: String, required: false }],
  hobbies: [{ type: String, required: false }],
  income: { type: Number, required: false },
  martialStatus: { type: String, required: false },
  password: { type: String, required: true },
  gender: { type: String, required: true },
  state: { type: String, required: true },

  phone: { type: String, required: true },
  role: { type: Number, required: true, default: 0 },
  spendingScore: { type: Number, required: true, default: 0 },
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
  VrHead: {
    type: Boolean,
    required: false,
  },
  dateOfBirth: {
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

  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
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
