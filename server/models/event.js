import mongoose from "mongoose";

const eventSchema = mongoose.Schema({
  name: { type: String, required: true },
  attendees: { type: Number, required: true },
  usersintrested: { type: Number, required: false },
  startDate: { type: Date, required: true },
  duration: { type: Number, required: true },
  state: { type: String, required: true },
  category: { type: String, required: false },
  endDate: { type: Date, required: true },
  link: { type: String, required: false },
  description: { type: String, required: true },
  feedback: [{ type: String, required: true }],
  costs: { type: Number, required: false },
  ticketPrice: { type: Number, required: true },
  parking: { type: String },
  ticketsSold: { type: Number, required: false },
  overview: { type: String, required: true },
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
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false,
    },
  ],
  organizer: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "organizerP",
      required: false,
    },
  ],
});

export default mongoose.model("Event", eventSchema);
