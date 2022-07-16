import mongoose from 'mongoose'

const planificationSchema = mongoose.Schema({
  name: { type: String, required: true },
  startDate: { type: Date, required: true },
  duration: { type: Number, required: false },
  progress: { type: Number, required: false },
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
});

export default mongoose.model("Planification", planificationSchema);